import React, { useEffect } from "react";
import useDispatchBoletas from "./useDispatchBoletas";
import usePrevious from "./usePrevious";
import useStateStorePrincipal from "./useStateStorePrincipal";
import { checkIfUpdateConfigChanged } from "./utils";
import useStateBoletas from "./useStateBoletas";
import {
  startProactiveOffersBookUpdateAction,
  startReactiveOffersBookUpdateAction,
} from "./bookOfertaAPIActions";

const BookUpdateManager: React.FC = () => {
  const {
    systemReducer: { updateMode, updateInterval },
  } = useStateStorePrincipal();

  const { searchedSymbol } = useStateBoletas().bookOfertaReducer;

  const dispatch = useDispatchBoletas();

  const previousUpdateMode = usePrevious(updateMode);
  const previousUpdateInterval = usePrevious(updateInterval);
  const previousSearchedSymbol = usePrevious(searchedSymbol);

  useEffect(() => {
    function checkIfBookChanged() {
      if (previousSearchedSymbol !== searchedSymbol) {
        return true;
      }

      return false;
    }

    function startUpdate() {
      if (updateMode === "reactive") {
        dispatch(startReactiveOffersBookUpdateAction());
      } //
      else if (updateMode === "proactive") {
        dispatch(startProactiveOffersBookUpdateAction());
      }
    }

    const hasBookChanged = checkIfBookChanged();
    const hasUpdateConfigChanged = checkIfUpdateConfigChanged({
      previousUpdateMode,
      updateMode,
      previousUpdateInterval,
      updateInterval,
    });

    if (hasUpdateConfigChanged || hasBookChanged) {
      startUpdate();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, updateInterval, updateMode, searchedSymbol]);

  return null;
};

export default BookUpdateManager;