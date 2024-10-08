import useDispatchBoletas from "hooks/useDispatchBoletas";
import useStateBoletas from "hooks/useStateBoletas";
import { MDBIcon } from "mdbreact";
import React, { useMemo } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import {
  mostrarErroQtdeOnBlurAction,
  adicionarItemTabelaGainReducaoAction,
  mudarQtdAction,
  mudarAtributoBoletaAction,
} from "modules/boletas/duck/actions/boletaActions";
import CustomInput from "../../../../shared/components/CustomInput";

const InputGroupGainReducao = ({ namespace }) => {
  const dispatch = useDispatchBoletas();

  const boletasState = useStateBoletas();

  const currentBoleta = boletasState[namespace];

  const { dadosPesquisa } = currentBoleta;

  const priceInputConfig = useMemo(() => {
    const config = {
      step: 0.01,
      precision: 2,
    };

    if (dadosPesquisa.stepQtde === 0.01) {
      config.step = 0.00001;
      config.precision = 5;
    }

    return config;
  }, [dadosPesquisa.stepQtde]);

  const typeInputQtty = useMemo(() => {
    let inputType = "quantidade";

    if (dadosPesquisa.stepQtde === 0.01) {
      inputType = "preco";
    }

    return inputType;
  }, [dadosPesquisa.stepQtde]);

  return (
    <div>
      <Row>
        <Col className="colTextInput">
          <Form.Group>
            <Form.Label>Disparo</Form.Label>
            <CustomInput
              type="preco"
              step={priceInputConfig.step}
              precision={priceInputConfig.precision}
              value={currentBoleta.gainDisparo}
              onChange={(valor) =>
                dispatch(
                  mudarAtributoBoletaAction(valor, namespace, "gainDisparo")
                )
              }
            />
          </Form.Group>
        </Col>
        <Col className="colTextInput">
          <Form.Group>
            <Form.Label>Execução</Form.Label>
            <CustomInput
              type="preco"
              step={priceInputConfig.step}
              precision={priceInputConfig.precision}
              value={currentBoleta.gainExec}
              onChange={(valor) =>
                dispatch(
                  mudarAtributoBoletaAction(valor, namespace, "gainExec")
                )
              }
            />
          </Form.Group>
        </Col>
        <Col className="colTextInput">
          <Form.Group>
            <Form.Label>Qtde</Form.Label>
            <CustomInput
              type={typeInputQtty}
              step={dadosPesquisa.stepQtde}
              value={currentBoleta.qtde}
              onChange={(valor) => dispatch(mudarQtdAction(valor, namespace))}
              onBlur={() =>
                dispatch(mostrarErroQtdeOnBlurAction(currentBoleta.erro))
              }
            />
          </Form.Group>
        </Col>
        <Col md={1} className="colIconeConfig">
          <Button
            variant="link"
            className="operation-icons"
            onClick={() =>
              dispatch(adicionarItemTabelaGainReducaoAction(namespace))
            }
          >
            <MDBIcon
              icon="plus-circle"
              size="2x"
              className="labelInput-verticalAlign"
            />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default InputGroupGainReducao;
