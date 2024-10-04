import React, { useMemo } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { mudarAtributoBoletaAction } from "./boletaActions";
import useDispatchBoletas from "./useDispatchBoletas";
import useStateBoletas from "./useStateBoletas";

const InputGroupBoleta = ({ namespace, cv }) => {
  const dispatch = useDispatchBoletas();
  const currentBoleta = useStateBoletas()[namespace];

  const { dadosPesquisa } = currentBoleta;

  const priceInputConfig = useMemo(() => {
    return {
      step: dadosPesquisa.stepQtde === 0.01 ? 0.00001 : 0.01,
      precision: dadosPesquisa.stepQtde === 0.01 ? 5 : 2,
    };
  }, [dadosPesquisa.stepQtde]);

  const renderRow = (label, disparoKey, execKey) => (
    <Row>
      <Col md={2} className="colLabelInput">
        <h6 className="labelInput-verticalAlign">{label}</h6>
      </Col>
      <Col className="colTextInput">
        <Form.Group>
          <Form.Label>Disparo</Form.Label>
          <Form.Control
            type="number"
            step={priceInputConfig.step}
            value={currentBoleta[disparoKey]}
            onChange={(e) =>
              dispatch(mudarAtributoBoletaAction(e.target.value, namespace, disparoKey))
            }
          />
        </Form.Group>
      </Col>
      <Col className="colTextInput">
        <Form.Group>
          <Form.Label>Execução</Form.Label>
          <Form.Control
            type="number"
            step={priceInputConfig.step}
            value={currentBoleta[execKey]}
            onChange={(e) =>
              dispatch(mudarAtributoBoletaAction(e.target.value, namespace, execKey))
            }
          />
        </Form.Group>
      </Col>
    </Row>
  );

  return (
    <Form>
      {cv === "compra" ? (
        <>
          {renderRow("Gain", "gainDisparo", "gainExec")}
          {renderRow("Stop", "stopDisparo", "stopExec")}
        </>
      ) : (
        <>
          {renderRow("Stop", "stopDisparo", "stopExec")}
          {renderRow("Gain", "gainDisparo", "gainExec")}
        </>
      )}
    </Form>
  );
};

export default InputGroupBoleta;
