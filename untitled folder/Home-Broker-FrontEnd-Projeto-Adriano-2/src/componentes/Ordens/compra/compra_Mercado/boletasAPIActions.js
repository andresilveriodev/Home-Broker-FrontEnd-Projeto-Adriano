import { pesquisarAtivoAPI, enviarOrdemAPI } from "api/API";
import { atualizarCotacaoBoletasAPI } from "./ReativosAPI";
import {
  LISTAR_ORDENS_EXECUCAO,
  PESQUISAR_ATIVO_BOLETA_API,
} from "./ApiActionTypes";
import {
  montaOrdemPrincipal,
  validarOrdemBoleta,
} from "./MontarOrdens";
import {
  ATUALIZAR_EVENT_SOURCE_BOLETAS,
  UPDATE_MANY_BOLETA,
} from "./ActionTypes";
import { mudarAtributoBoletaAction } from "./boletaActions";
import produce from "immer";
import { storeAppPrincipal } from "./StoreCreation";
import { getProactiveBoletaQuoteAPI } from "./ProativosAPI";
import { formatarDataDaAPI } from "./Formatacoes";
import { clearIntervalAsync } from "set-interval-async";
import { setIntervalAsync } from "set-interval-async/dynamic";
import shouldDispatchAsyncUpdate from "./shouldDispatchAsyncUpdate";

export const pesquisarAtivoOnEnterAction = (namespace) => {
  return async (dispatch, getState) => {
    const appBoletasState = getState();

    const { ativo } = appBoletasState[namespace];

    const dadosPesquisa = await pesquisarAtivoAPI(ativo);

    if (dadosPesquisa) {
      dispatch({
        type: `${PESQUISAR_ATIVO_BOLETA_API}${namespace}`,
        payload: dadosPesquisa,
      });
    }
  };
};

export const startReactiveBoletaQuoteUpdateAction = (namespace) => {
  return async (dispatch, getState) => {
    const appBoletasState = getState();

    const { esource_boletaQuote, dadosPesquisa, interval_boletaQuote } =
      appBoletasState[namespace];

    if (esource_boletaQuote) {
      esource_boletaQuote.close();
    }

    if (interval_boletaQuote) {
      await clearIntervalAsync(interval_boletaQuote);
    }

    const codigo = dadosPesquisa.ativo;

    if (codigo) {
      const newSource = atualizarCotacaoBoletasAPI({
        dispatch,
        codigos: codigo,
        dadosPesquisa,
        namespace,
      });

      dispatch({
        type: `${ATUALIZAR_EVENT_SOURCE_BOLETAS}${namespace}`,
        payload: newSource,
      });
    }
  };
};

export const enviarOrdemAction = ({
  selectedAccount,
  namespace,
  orderInfo,
}) => {
  return async (dispatch, getState) => {
    const {
      ordersExecReducer: { tabelaOrdensExecucao },
    } = storeAppPrincipal.getState();

    const boletaState = { ...getState()[namespace], orderInfo };

    const orderPayload = [montaOrdemPrincipal(boletaState, selectedAccount)];

    dispatch(mudarAtributoBoletaAction(0, namespace, "orderId"));

    if (validarOrdemBoleta(boletaState, selectedAccount)) {
      const data = await enviarOrdemAPI(orderPayload);

      if (data && data.length) {
        const updatedOrders = produce(tabelaOrdensExecucao, (draft) => {
          draft.unshift(data[0]);
        });
        storeAppPrincipal.dispatch({
          type: LISTAR_ORDENS_EXECUCAO,
          payload: updatedOrders,
        });
      }
    }
  };
};

export const startProactiveBoletaQuoteUpdateAction = (namespace) => {
  return async (dispatch, getState) => {
    const appBoletasState = getState();
    const {
      systemReducer: { updateInterval },
    } = storeAppPrincipal.getState();

    const { esource_boletaQuote, interval_boletaQuote, dadosPesquisa } =
      appBoletasState[namespace];

    if (esource_boletaQuote) {
      esource_boletaQuote.close();
    }

    if (interval_boletaQuote) {
      await clearIntervalAsync(interval_boletaQuote);
    }

    const { ativo: symbol } = dadosPesquisa;

    if (symbol) {
      const updateBoletas = async (interval) => {
        const appBoletasState = getState();

        const { dadosPesquisa: searchData, interval_boletaQuote } =
          appBoletasState[namespace];

        const { ativo: symbol } = searchData;

        const data = await getProactiveBoletaQuoteAPI(symbol);

        const shouldDispatch = shouldDispatchAsyncUpdate(
          interval,
          interval_boletaQuote,
        );

        if (data && shouldDispatch) {
          const { quote, lastDate } = data;

          const updatedSearchData = produce(searchData, (draft) => {
            draft.cotacaoAtual = quote;
            draft.ultimoHorario =
              formatarDataDaAPI(lastDate).toLocaleTimeString();
          });

          dispatch({
            type: `${PESQUISAR_ATIVO_BOLETA_API}${namespace}`,
            payload: updatedSearchData,
          });
        }
      };

      const interval = setIntervalAsync(async () => {
        await updateBoletas(interval);
      }, updateInterval);

      dispatch({
        type: `${UPDATE_MANY_BOLETA}${namespace}`,
        payload: { interval_boletaQuote: interval },
      });
    }
  };
};