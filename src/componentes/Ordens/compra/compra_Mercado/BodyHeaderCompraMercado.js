import React from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { BodyHeaderCompleto } from './PopupBodyHeader'

class BodyHeaderCompraMercado extends React.Component {
  render() {
    return <BodyHeaderCompleto dadosPesquisa={this.props.dadosPesquisa} />;
  }
}
=======
import { BodyHeaderCompleto } from "./PopupBodyHeader";

const BodyHeaderCompraMercado = ({ dadosPesquisa }) => {
  return <BodyHeaderCompleto dadosPesquisa={dadosPesquisa} />;
};
>>>>>>> txt organizado

const mapStateToProps = (state) => ({
  dadosPesquisa: state.compraMercadoReducer.dadosPesquisa,
});

<<<<<<< HEAD
export default connect(mapStateToProps, {})(BodyHeaderCompraMercado);
=======
export default connect(mapStateToProps)(BodyHeaderCompraMercado);
>>>>>>> txt organizado
