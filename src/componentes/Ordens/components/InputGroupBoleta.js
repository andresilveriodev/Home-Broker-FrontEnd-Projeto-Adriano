import React, { useMemo } from "react";
import { Row, Col, Form } from "react-bootstrap";
import CustomInput, { boxShadowInput } from "shared/components/CustomInput";
import { mudarAtributoBoletaAction } from "modules/boletas/duck/actions/boletaActions";
import { IconeConfigAbrirFormulario } from "shared/components/IconesConfigFormInterno";
import {
  COMPRA_STARTSTOP_NAMESPACE,
  VENDA_STARTSTOP_NAMESPACE,
} from "constants/ActionTypes";
import useDispatchBoletas from "hooks/useDispatchBoletas";
import useStateBoletas from "hooks/useStateBoletas";

const InputGroupBoleta = ({
  namespace,
  cv,
  popupToOpenGain,
  popupToOpenStop,
}) => {
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

  const rowGain = (
    <Row>
      <Col md={2} className="colLabelInput">
        <h6 className="labelInput-verticalAlign">
          {namespace === COMPRA_STARTSTOP_NAMESPACE ||
          namespace === VENDA_STARTSTOP_NAMESPACE
            ? "Start"
            : "Gain"}
        </h6>
      </Col>
      <Col className="colTextInput">
        <Form.Group>
          <Form.Label>Disparo</Form.Label>
          <CustomInput
            type="preco"
            className={`gainDisparo_Agendada ${boxShadowInput(
              "gainDisparo_Agendada"
            )}`}
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
            className={`gainExec_Agendada ${boxShadowInput(
              "gainExec_Agendada"
            )}`}
            value={currentBoleta.gainExec}
            onChange={(valor) =>
              dispatch(mudarAtributoBoletaAction(valor, namespace, "gainExec"))
            }
          />
        </Form.Group>
      </Col>
      <Col md={1} className="colIconeConfig">
        <IconeConfigAbrirFormulario nomeFormulario={popupToOpenGain} />
      </Col>
    </Row>
  );

  const rowStop = (
    <Row>
      <Col md={2} className="colLabelInput">
        <h6 className="labelInput-verticalAlign">Stop</h6>
      </Col>
      <Col className="colTextInput">
        <Form.Group>
          <Form.Label>Disparo</Form.Label>
          <CustomInput
            type="preco"
            className={`stopDisparo_Agendada ${boxShadowInput(
              "stopDisparo_Agendada"
            )}`}
            step={priceInputConfig.step}
            precision={priceInputConfig.precision}
            value={currentBoleta.stopDisparo}
            onChange={(valor) =>
              dispatch(
                mudarAtributoBoletaAction(valor, namespace, "stopDisparo")
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
            className={`stopExec_Agendada ${boxShadowInput(
              "stopExec_Agendada"
            )}`}
            step={priceInputConfig.step}
            precision={priceInputConfig.precision}
            value={currentBoleta.stopExec}
            onChange={(valor) =>
              dispatch(mudarAtributoBoletaAction(valor, namespace, "stopExec"))
            }
          />
        </Form.Group>
      </Col>
      <Col md={1} className="colIconeConfig">
        <IconeConfigAbrirFormulario nomeFormulario={popupToOpenStop} />
      </Col>
    </Row>
  );

  return (
    <Form>
      {cv === "compra" ? (
        <div>
          {rowGain}
          {rowStop}
        </div>
      ) : (
        <div>
          {rowStop}
          {rowGain}
        </div>
      )}
    </Form>
  );
};

export default InputGroupBoleta;
