import React, { useCallback } from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import useStateBoletas from "./useStateBoletas";
import useDispatchBoletas from "./useDispatchBoletas";
import { mudarAtivoAction, mudarQtdAction } from "./boletaActions";
import { pesquisarAtivoOnEnterAction } from "./boletasAPIActions";

const BoletaSymbolQttyRow = ({ namespace }) => {
  const dispatch = useDispatchBoletas();
  const { dadosPesquisa, qtde, ativo } = useStateBoletas()[namespace];

  const handleQttyChange = useCallback(
    (value) => {
      dispatch(mudarQtdAction(value, namespace));
    },
    [dispatch, namespace]
  );

  const handleSymbolChange = useCallback(
    (event) => {
      dispatch(mudarAtivoAction(event, namespace));
    },
    [dispatch, namespace]
  );

  const handleSearchSymbol = useCallback(async () => {
    await dispatch(pesquisarAtivoOnEnterAction(namespace));
  }, [dispatch, namespace]);

  return (
    <Row>
      <Col md={2} className="colLabelInput">
        <h6 className="labelInput-verticalAlign">Ativo</h6>
      </Col>
      <Col className="formAtivo colTextInput">
        <InputGroup>
          <Form.Control
            className="textInput"
            type="text"
            placeholder=""
            name="ativo"
            value={ativo}
            onChange={handleSymbolChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleSearchSymbol();
              }
            }}
          />
          <InputGroup.Append>
            <span
              className="appendedSearchIcon divClicavel iconePesquisarBoletas"
              onClick={handleSearchSymbol}
            >
              <MDBIcon icon="search" />
            </span>
          </InputGroup.Append>
        </InputGroup>
      </Col>

      <Col className="colTextInput">
        <Form.Group>
          <Form.Label>Qtde</Form.Label>
          <Form.Control
            type="number"
            value={qtde}
            onChange={(e) => handleQttyChange(e.target.value)}
          />
        </Form.Group>
      </Col>
    </Row>
  );
};

export default BoletaSymbolQttyRow;
