import { useSelector } from "react-redux";

const useStateBoletas = () => {
  const state = useSelector((state) => state);
  return state;
};

export default useStateBoletas;
