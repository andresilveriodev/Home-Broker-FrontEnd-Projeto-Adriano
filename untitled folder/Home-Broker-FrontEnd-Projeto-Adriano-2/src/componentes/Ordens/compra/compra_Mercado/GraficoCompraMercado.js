import React from "react";
import { Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import img from "assets/compra/CompraModeloNovo.png";
import InputGroupBoletaGraphic from "./InputGroupBoletaGraphic";
import { COMPRA_MERCADO_NAMESPACE } from "./ActionTypes";

class GraficoCompraMercado extends React.Component {
  render() {
    return (
      <Col className="colGrafico">
        <div className="imgContainer">
          <img src={img} className="imgChart" alt="Gráfico Compra Mercado" />
          <Form>
            <InputGroupBoletaGraphic
              namespace={COMPRA_MERCADO_NAMESPACE}
              boletaType="graficoTipoAgendada"
              cv="CA"
            />
            <Form.Control
              className="graphQuoteInput CotacaoAtualGrafico_CA"
              value={this.props.dadosPesquisa.cotacaoAtual}
              onChange={() => {}}
            />
          </Form>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  dadosPesquisa: state.compraMercadoReducer.dadosPesquisa,
});

export default connect(mapStateToProps)(GraficoCompraMercado);
