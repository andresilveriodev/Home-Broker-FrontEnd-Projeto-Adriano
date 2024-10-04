// Se `listarBookOfertaAPI`, `getProactiveOffersBookAPI`, e `atualizarBookAPI` não estão disponíveis, você precisa substituí-los por implementações reais ou remover essas chamadas.

import { toast } from "react-toastify";
// Substitua `storeAppPrincipal` pela importação correta
import storeAppPrincipal from "./StoreCreation"; // Corrija o caminho conforme necessário

// Substitua UPDATE_MANY_OFFER_BOOK com uma constante que existe
import { COMPRA_MERCADO_NAMESPACE } from "./ActionTypes"; // Certifique-se de que essa constante existe

// Ação para listar ofertas do book quando o código do ativo é inserido
export const listarBookOfertaOnEnterAction = ({ codigoAtivo }) => {
  return async (dispatch, getState) => {
    const { bookOfertaReducer: { searchedSymbol: previousSymbol } } = getState();
    const { systemReducer: { updateMode } } = storeAppPrincipal.getState();

    document.body.style.cursor = "wait";

    // Aqui você precisa substituir pela chamada de API real
    const data = await listarBookOfertaAPI(codigoAtivo);

    document.body.style.cursor = "default";

    let bookTables = {
      tabelaOfertasCompra: data.tabelaOfertasCompra || [],
      tabelaOfertasVenda: data.tabelaOfertasVenda || [],
    };

    const searchedSymbol = codigoAtivo;
    let shouldAlert = false;

    if (
      !bookTables.tabelaOfertasCompra.length &&
      !bookTables.tabelaOfertasVenda.length
    ) {
      bookTables = {
        tabelaOfertasCompra: new Array(5).fill({ price: "", qtty: "" }, 0, 5),
        tabelaOfertasVenda: new Array(5).fill({ price: "", qtty: "" }, 0, 5),
      };

      shouldAlert = true;
    }

    // Condicional simples para iniciar a atualização
    if (previousSymbol === searchedSymbol) {
      if (updateMode === "reactive") {
        dispatch(startReactiveOffersBookUpdateAction());
      } else {
        dispatch(startProactiveOffersBookUpdateAction());
      }
    }

    dispatch({
      type: COMPRA_MERCADO_NAMESPACE, // Ajuste aqui para o nome correto
      payload: {
        tabelaOfertasCompra: bookTables.tabelaOfertasCompra,
        tabelaOfertasVenda: bookTables.tabelaOfertasVenda,
        searchedSymbol,
      },
    });

    if (shouldAlert) {
      toast.warning("Não há book de ofertas disponível");
    }
  };
};

// Substitua `setIntervalAsync` e `clearIntervalAsync` por `setInterval` e `clearInterval` normais se o módulo não estiver disponível
export const startReactiveOffersBookUpdateAction = () => {
  return (dispatch, getState) => {
    const { bookOfertaReducer: { esource_offersBook, searchedSymbol, interval_offersBook } } = getState();
    const { systemReducer: { token } } = storeAppPrincipal.getState();

    if (esource_offersBook) {
      esource_offersBook.close();
    }

    if (interval_offersBook) {
      clearInterval(interval_offersBook);
    }

    if (searchedSymbol) {
      setTimeout(() => {
        const source = atualizarBookAPI({ dispatch, symbol: searchedSymbol, token });
        dispatch({
          type: ATUALIZAR_SOURCE_EVENT_BOOK_OFERTAS, // Verifique se isso existe
          payload: source,
        });
      }, 3000);
    }
  };
};

export const startProactiveOffersBookUpdateAction = () => {
  return (dispatch, getState) => {
    const { bookOfertaReducer: { esource_offersBook, searchedSymbol, interval_offersBook } } = getState();
    const { systemReducer: { updateInterval } } = storeAppPrincipal.getState();

    if (esource_offersBook) {
      esource_offersBook.close();
    }

    if (interval_offersBook) {
      clearInterval(interval_offersBook);
    }

    if (searchedSymbol) {
      const updateBook = async () => {
        const data = await getProactiveOffersBookAPI(searchedSymbol);

        const shouldDispatch = true; // Substitua a lógica se necessário

        if (data && shouldDispatch) {
          dispatch({
            type: COMPRA_MERCADO_NAMESPACE, // Ajuste aqui para o nome correto
            payload: {
              tabelaOfertasCompra: data.bookBuy,
              tabelaOfertasVenda: data.bookSell,
            },
          });
        }
      };

      const interval = setInterval(updateBook, updateInterval);

      dispatch({
        type: COMPRA_MERCADO_NAMESPACE, // Ajuste aqui para o nome correto
        payload: { interval_offersBook: interval },
      });
    }
  };
};
