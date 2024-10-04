import React, { useEffect } from "react";
import useDispatchBoletas from "./useDispatchBoletas";
import usePrevious from "./usePrevious";
import useStateBoletas from "./useStateBoletas";
import useStateStorePrincipal from "./useStateStorePrincipal";
import {
  startProactiveBoletaQuoteUpdateAction,
  startReactiveBoletaQuoteUpdateAction,
} from "./boletasAPIActions";
import checkIfUpdateConfigChanged from "./utils";
import { mudarAtributoBoletaAction } from "./boletaActions";
import { clearIntervalAsync } from "set-interval-async";

const BoletaUpdateManager = ({ namespace, visibility }) => {
  const {
    systemReducer: { updateMode, updateInterval },
  } = useStateStorePrincipal();

  const {
    dadosPesquisa: symbolData,
    esource_boletaQuote,
    interval_boletaQuote,
  } = useStateBoletas()[namespace];

  const dispatch = useDispatchBoletas();

  const previousUpdateMode = usePrevious(updateMode);
  const previousUpdateInterval = usePrevious(updateInterval);
  const previousSymbolData = usePrevious(symbolData);

  // Inicia as atualizações
  useEffect(() => {
    function checkIfBoletaChanged() {
      return previousSymbolData && previousSymbolData !== symbolData;
    }

    function startUpdate() {
      if (updateMode === "reactive") {
        dispatch(startReactiveBoletaQuoteUpdateAction(namespace));
      } else if (updateMode === "proactive") {
        dispatch(startProactiveBoletaQuoteUpdateAction(namespace));
      }
    }

    const hasBoletaChanged = checkIfBoletaChanged();
    const hasUpdateConfigChanged = checkIfUpdateConfigChanged({
      previousUpdateMode,
      updateMode,
      previousUpdateInterval,
      updateInterval,
    });

    if (hasUpdateConfigChanged || hasBoletaChanged) {
      startUpdate();
    }
  }, [
    updateInterval,
    updateMode,
    symbolData,
    dispatch,
    namespace,
    previousSymbolData,
    previousUpdateMode,
    previousUpdateInterval,
  ]);

  // Cancela as atualizações quando fechado
  useEffect(() => {
    if (!visibility) {
      if (esource_boletaQuote) {
        esource_boletaQuote.close();
      }
      if (interval_boletaQuote) {
        clearIntervalAsync(interval_boletaQuote);
      }
      dispatch(mudarAtributoBoletaAction(0, namespace, "orderId"));
    }
  }, [visibility, namespace, dispatch, esource_boletaQuote, interval_boletaQuote]);

  return null;
};

export default BoletaUpdateManager;
