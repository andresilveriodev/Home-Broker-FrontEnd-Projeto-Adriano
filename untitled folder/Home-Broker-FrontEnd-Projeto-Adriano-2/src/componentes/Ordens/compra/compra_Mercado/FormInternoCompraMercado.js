import React, { useCallback, useMemo } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { limparAction } from "./boletaActions";
import BoletaSymbolQttyRow from "./BoletaSymbolQttyRow";
import  BoletaSendOrderButton  from "./BoletaSendOrderButton";
import InputGroupBoleta from "./InputGroupBoleta";
import useStateBoletas from "./useStateBoletas";
import useDispatchBoletas from "./useDispatchBoletas";
import { COMPRA_MERCADO_NAMESPACE } from "./ActionTypes";
import { CalculoValorAproximadoMercado } from "./CalculoValorTotal";

const FormInternoCompraMercado = ({ ordem }) => {
  const boletaState = useStateBoletas()[COMPRA_MERCADO_NAMESPACE];
  const dispatch = useDispatchBoletas();
  const { qtde, dadosPesquisa } = boletaState;

  const handleClearData = useCallback(() => {
    dispatch(limparAction(COMPRA_MERCADO_NAMESPACE));
  }, [dispatch]);

  const totalValue = useMemo(() => {
    return CalculoValorAproximadoMercado(qtde, dadosPesquisa);
  }, [dadosPesquisa, qtde]);

  return (
    <Col className="colFormInterno">
      <div className="divAsModalContainer">
        <Form>
          <BoletaSymbolQttyRow namespace={COMPRA_MERCADO_NAMESPACE} />
        </Form>

        <Row>
          <Col className="colValorTotal">
            <h6 className="valorTotalText">{totalValue}</h6>
          </Col>
        </Row>

        <InputGroupBoleta
          namespace={COMPRA_MERCADO_NAMESPACE}
          cv="compra"
          popupToOpenGain="compra_gainreducao"
          popupToOpenStop="venda_stopmovel"
        />

        <div className="customFooter">
          <Row>
            <Col md={3}>
              <Button variant="secondary" size="sm" onClick={handleClearData}>
                <h6>Limpar</h6>
              </Button>
            </Col>
            <Col md={6}>
              <BoletaSendOrderButton
                orderInfo={ordem}
                namespace={COMPRA_MERCADO_NAMESPACE}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default FormInternoCompraMercado;
