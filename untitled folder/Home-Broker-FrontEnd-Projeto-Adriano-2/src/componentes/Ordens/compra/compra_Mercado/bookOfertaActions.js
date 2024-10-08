import { VALIDACAO_QTDE } from "constants/AlertaErros";
import {
  MUDAR_QTDE_BOOK,
  MUDAR_STOPLOSS_BOOK,
  MUDAR_GAIN_BOOK,
  MUDAR_INPUTHEADER_BOOK,
} from "./ActionTypes";
import { toast } from "react-toastify";

export const mudarQtdAction = (event) => {
  return (dispatch) => {
    let erro = "";
    if (event.target.validationMessage) {
      erro = VALIDACAO_QTDE;
    }
    dispatch({
      type: MUDAR_QTDE_BOOK,
      payload: { qtde: event.target.value, erro: erro },
    });
  };
};

export const mostrarErroQtdeOnBlurAction = (erro) => {
  return (dispatch) => {
    if (erro !== "") {
      toast.warning(VALIDACAO_QTDE);
    }
  };
};

export const venderAction = () => {
  return (dispatch) => {
    console.log("vendeu");
    dispatch({ type: "" });
  };
};

export const comprarAction = () => {
  return (dispatch) => {
    console.log("comprou");
    dispatch({ type: "" });
  };
};

export const mudarStopLossAction = (event) => {
  return (dispatch) => {
    dispatch({
      type: MUDAR_STOPLOSS_BOOK,
      payload: event.target.value,
    });
  };
};

export const mudarGainAction = (event) => {
  return (dispatch) => {
    dispatch({
      type: MUDAR_GAIN_BOOK,
      payload: event.target.value,
    });
  };
};

export const mudarInputHeaderAction = (valor) => {
  return (dispatch) => {
    dispatch({
      type: MUDAR_INPUTHEADER_BOOK,
      payload: valor.toUpperCase(),
    });
  };
};
