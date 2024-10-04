import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import { fecharFormAction } from "./GlobalAppActions";
import useDispatchBoletas from "./useDispatchBoletas";
import useStateBoletas from "./useStateBoletas";
import useStateGlobalStore from "./useStateGlobalStore";
import useDispatchGlobalStore from "./useDispatchGlobalStore";

const PopupHeader = ({ headerTitle, headerClass, name }) => {
  const boletaState = useStateBoletas();
  const {
    appBoletasReducer: { appProps },
  } = boletaState;

  const stateGlobalStore = useStateGlobalStore();
  const dispatchGlobal = useDispatchGlobalStore();

  const formShow = stateGlobalStore.show;
  const { appkey } = appProps;

  const handleCloseBoleta = useCallback(() => {
    dispatchGlobal(fecharFormAction(formShow, name, appkey));
  }, [appkey, dispatchGlobal, formShow, name]);

  return (
    <div className={`${headerClass} handle mheader`}>
      <h6 className="mtitle">{headerTitle}</h6>
      <div className="wrapperIconesHeader">
        <Button
          variant="link"
          className="iconesHeader"
          onClick={handleCloseBoleta}
        >
          <span className="fa-stack">
            <MDBIcon icon="circle" className="fa-stack-2x" />
            <MDBIcon
              icon="times"
              className="fa-stack-1x iconeFechar"
              name={name}
            />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default PopupHeader;
