import React from "react";
import { Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import img from "assets/compra/CompraModeloNovo.png";
<<<<<<< HEAD
import IconeConfigGrafico from "shared/components/IconeConfigGrafico";
import {
  LabelInputGrafico,
  TextoGainStopGrafico,
  TextoCotacaoAtualGrafico,
  TextoValorTotalGrafico,
} from "modules/boletas/components/TextoGraficoBoletas";
import { COMPRA_MERCADO_NAMESPACE } from "constants/ActionTypes";
import { CalculoValorTotalAgendada } from "shared/utils/CalculoValorTotal";
import InputGroupBoletaGraphic from "modules/boletas/components/BoletaGraphics/InputGroupBoletaGraphic";
=======
import InputGroupBoletaGraphic from "./InputGroupBoletaGraphic";
import { COMPRA_MERCADO_NAMESPACE } from "./ActionTypes";
>>>>>>> txt organizado

class GraficoCompraMercado extends React.Component {
  render() {
    return (
      <Col className="colGrafico">
        <div className="imgContainer">
<<<<<<< HEAD
          <img src={img} className="imgChart" alt="" />
=======
          <img src={img} className="imgChart" alt="Gráfico Compra Mercado" />
>>>>>>> txt organizado
          <Form>
            <InputGroupBoletaGraphic
              namespace={COMPRA_MERCADO_NAMESPACE}
              boletaType="graficoTipoAgendada"
              cv="CA"
            />
            <Form.Control
              className="graphQuoteInput CotacaoAtualGrafico_CA"
              value={this.props.dadosPesquisa.cotacaoAtual}
<<<<<<< HEAD
              onChange={() => false}
            />
          </Form>
          {LabelInputGrafico("Disparo", "TextoGainDisparo_CA")}
          {LabelInputGrafico("Execução", "TextoGainExecucao_CA")}
          {LabelInputGrafico("Disparo", "TextoStopDisparo_CA")}
          {LabelInputGrafico("Execução", "TextoStopExecucao_CA")}
          {TextoGainStopGrafico("GAIN", "TextoGain_CA")}
          {TextoGainStopGrafico("STOP", "TextoStop_CA")}
          {TextoCotacaoAtualGrafico("TextoCotacaoAtualGrafico_CA")}
          {TextoValorTotalGrafico(
            "",
            CalculoValorTotalAgendada(
              this.props.gainDisparo,
              this.props.gainExec,
              this.props.qtde,
            ),
            "ValorTotalGain",
          )}
          {TextoValorTotalGrafico(
            "",
            CalculoValorTotalAgendada(
              this.props.stopDisparo,
              this.props.stopExec,
              this.props.qtde,
            ),
            "ValorTotalStop",
          )}
          <IconeConfigGrafico
            className="ConfigGainGrafico_CA"
            name="compra_gainreducao"
          />
          <IconeConfigGrafico
            className="ConfigStopGrafico_CA"
            name="venda_stopmovel"
          />
=======
              onChange={() => {}}
            />
          </Form>
>>>>>>> txt organizado
        </div>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
<<<<<<< HEAD
  gainDisparo: state.compraMercadoReducer.gainDisparo,
  gainExec: state.compraMercadoReducer.gainExec,
  stopDisparo: state.compraMercadoReducer.stopDisparo,
  stopExec: state.compraMercadoReducer.stopExec,
  dadosPesquisa: state.compraMercadoReducer.dadosPesquisa,
  qtde: state.compraMercadoReducer.qtde,
});

export default connect(mapStateToProps, {})(GraficoCompraMercado);
=======
  dadosPesquisa: state.compraMercadoReducer.dadosPesquisa,
});

export default connect(mapStateToProps)(GraficoCompraMercado);
>>>>>>> txt organizado
