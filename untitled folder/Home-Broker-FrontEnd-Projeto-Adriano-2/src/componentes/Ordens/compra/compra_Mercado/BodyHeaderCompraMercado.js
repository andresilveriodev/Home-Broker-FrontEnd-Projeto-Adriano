import React from "react";
import { connect } from "react-redux";
import { BodyHeaderCompleto } from "./PopupBodyHeader";

const BodyHeaderCompraMercado = ({ dadosPesquisa }) => {
  return <BodyHeaderCompleto dadosPesquisa={dadosPesquisa} />;
};

const mapStateToProps = (state) => ({
  dadosPesquisa: state.compraMercadoReducer.dadosPesquisa,
});

export default connect(mapStateToProps)(BodyHeaderCompraMercado);
