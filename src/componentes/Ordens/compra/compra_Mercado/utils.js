export const getReducerStateStorePrincipal = (state, reducer) => {
  switch (reducer) {
    case "thl":
      return state.thlReducer;
    case "principal":
      return state.systemReducer;
    case "multileg":
      return state.multilegReducer;
    case "posicao":
      return state.positionReducer;
    case "ordensExec":
      return state.ordersExecReducer;
    default:
      return state;
  }
};

export const getReducerStateBoletas = (state, namespace) => {
  if (namespace) return state[namespace];
  return state;
};

export const getMainReducerState = (state) => {
  return state.GlobalReducer;
};
