import React, { useCallback, useMemo } from "react";
import { Button } from "react-bootstrap";
import useDispatchBoletas from "./useDispatchBoletas";
import { enviarOrdemAction } from "./boletasAPIActions";

const BoletaSendOrderButton = ({ orderInfo, namespace }) => {
  const dispatch = useDispatchBoletas();

  const handleSendOrder = useCallback(() => {
    dispatch(enviarOrdemAction({ namespace, orderInfo }));
  }, [dispatch, namespace, orderInfo]);

  const buttonType = useMemo(() => {
    return orderInfo && orderInfo.tipoOferta === "C" ? "primary" : "danger";
  }, [orderInfo]);

  const buttonLabel = useMemo(() => {
    return orderInfo && orderInfo.tipoOferta === "C" ? "Comprar" : "Vender";
  }, [orderInfo]);

  return (
    <div>
      <Button variant={buttonType} size="sm" onClick={handleSendOrder}>
        <h6>{buttonLabel}</h6>
      </Button>
    </div>
  );
};

export default BoletaSendOrderButton;
