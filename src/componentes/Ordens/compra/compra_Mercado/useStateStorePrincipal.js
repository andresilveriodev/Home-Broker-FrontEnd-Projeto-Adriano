import { StorePrincipalContext } from "redux/StoreCreation";
import { createSelectorHook } from "react-redux";

const useSelectorStorePrincipal = createSelectorHook(StorePrincipalContext);

const useStateStorePrincipal = () => {
  const reducerState = useSelectorStorePrincipal((state) => state);
  return reducerState;
};

export default useStateStorePrincipal;
