import React from "react";
import { MDBIcon } from "mdbreact";
import { Button } from "react-bootstrap";
import useDispatchStorePrincipal from "./useDispatchStorePrincipal";
import {
  abrirFormAction,
  abrirFormConfigurarAction,
} from "./GlobalAppActions";
import { openCloseMultilegExtraConfigsAction } from "./MultilegActions";
import useStateGlobalStore from "./useStateGlobalStore";
import useDispatchBoletas from "./useDispatchBoletas";
import useDispatchGlobalStore from "./useDispatchGlobalStore";
import { cond_openCloseMultilegExtraConfigsAction } from "./ConditionalMultilegActions";

export default ({ className, name = "" }) => {
  let handleShow;

  const stateGlobalStore = useStateGlobalStore();

  if (["config_venda", "config_compra"].includes(name)) {
    const dispatch = useDispatchBoletas();
    handleShow = (e) =>
      dispatch(
        abrirFormConfigurarAction(e, { zIndex: stateGlobalStore.zIndex }),
      );
  } //
  else if (name.includes("config_complementar")) {
    const dispatchStorePrincipal = useDispatchStorePrincipal();

    if (name === "config_complementar") {
      handleShow = () =>
        dispatchStorePrincipal(openCloseMultilegExtraConfigsAction());
    } //
    else if (name === "config_complementar_conditional_multileg") {
      handleShow = () =>
        dispatchStorePrincipal(cond_openCloseMultilegExtraConfigsAction());
    }
  } //
  else {
    const dispatchGlobal = useDispatchGlobalStore();
    handleShow = (e) =>
      dispatchGlobal(abrirFormAction(e, { ...stateGlobalStore }, ""));
  }

  return (
    <div className={`wrapperIconeConfiguracaoGrafico ${className}`}>
      <Button
        variant="link"
        className="iconeConfiguracaoGrafico"
        onClick={(event) => {
          event.stopPropagation();
          handleShow(event);
        }}
        data-name={name}
      >
        <MDBIcon icon="cog" size="2x" data-name={name} />
      </Button>
    </div>
  );
};