import React from "react";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import Draggable from 'react-draggable'; 
import FormInternoCompraMercado from "./FormInternoCompraMercado";
import GraficoCompraMercado from "./GraficoCompraMercado";
import BodyHeaderCompraMercado from "./BodyHeaderCompraMercado";
import ModalHeader from "./PopupHeader";
import { COMPRA_MERCADO_NAMESPACE } from "./ActionTypes";
import { shouldResetBoletaPositionForClass } from "./handleBoletaPositionReset";


class CompraMercado extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldResetPosition: false,
    };
  }

  componentDidUpdate() {
    shouldResetBoletaPositionForClass(this);
  }

  render() {
    return (
      <Draggable
        id="compramercado"
        headerTitle={this.props.headerTitle}
        renderModalBody={() => modalBody(this.props)}
        shouldResetPosition={this.state.shouldResetPosition}
        headerClass="border-green"
        renderHeader={(resetPosition) => (
          <ModalHeader
            headerTitle={this.props.headerTitle}
            headerClass="border-green"
            resetPosition={resetPosition}
            name={this.props.name}
            ativo={this.props.ativo}
            namespace={COMPRA_MERCADO_NAMESPACE}
          />
        )}
      />
    );
  }
}

const modalBody = (props) => (
  <div className="mbody">
    <BodyHeaderCompraMercado />
    <Row>
      <FormInternoCompraMercado ordem={ordem} />
      <GraficoCompraMercado />
    </Row>
  </div>
);

const mapStateToProps = (state) => ({
  ativo: state.compraMercadoReducer.ativo,
  appProps: state.appBoletasReducer.appProps,
});

export default connect(mapStateToProps)(CompraMercado);

const ordem = {
  nome: "Compra a Mercado",
  tipoOrdem: "buy",
  tipoOferta: "C",
};
