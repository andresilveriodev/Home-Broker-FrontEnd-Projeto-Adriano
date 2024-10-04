import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import CompraMercado from "./CompraMercado";
import { GlobalContext, StorePrincipalContext } from "./StoreCreation";
import {
  fecharFormAction,
  abrirFormAction,
  aumentarZindexAction,
  receberAppPropsAction,
  receberDadosOrdemExecMainReducerAction,
} from "./GlobalAppActions";
import { listarBookOfertaOnEnterAction } from "./bookOfertaAPIActions";
import { mudarInputHeaderAction } from "./bookOfertaActions";
import { openBoletaFromOrdersExecAction } from "./boletaActions";
import Boleta from "./Boleta";
import { COMPRA_MERCADO_NAMESPACE } from "./ActionTypes";

class AppBoletas extends React.Component {
  componentDidMount() {
    const { props } = this;

    if (props.divkey !== "") {
      const element = document.getElementById(props.divkey);

      if (element) {
        element.style.zIndex = props.zIndex + 1;
      }
    }

    props.receberAppPropsAction(props);

    if (props.appkey !== 0 && props.codigoBook) {
      props.mudarInputHeaderAction(props.codigoBook);
      props.listarBookOfertaOnEnterAction({
        codigoAtivo: props.codigoBook,
      });
    }

    if (props.dadosOrdemExec) {
      props.openBoletaFromOrdersExecAction(props);
    }
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (props.divkey !== "" && document.getElementById(props.divkey)) {
      document.getElementById(props.divkey).style.zIndex = props.zIndex + 1;
    }

    if (
      prevProps.show[props.appkey] !== props.show[props.appkey] &&
      props.dadosOrdemExec
    ) {
      props.openBoletaFromOrdersExecAction(props);
    }

    if (prevProps !== props) {
      props.receberAppPropsAction(props);
    }
  }

  render() {
    const { props } = this;

    return (
      <div className="AppBoletas">
        <Boleta
          appKey={props.appkey}
          boletaName="compra_mercado"
          visibilityIndex={props.indiceShow}
          namespace={COMPRA_MERCADO_NAMESPACE}
        >
          <CompraMercado headerTitle="COMPRA A MERCADO" name="compra_mercado" />
        </Boleta>
      </div>
    );
  }
}

const mapStateToPropsGlobalStore = (state) => {
  return {
    apps: state.GlobalReducer.apps,
    show: state.GlobalReducer.show,
    divkey: state.GlobalReducer.divkey,
    zIndex: state.GlobalReducer.zIndex,
    dadosOrdemExec: state.GlobalReducer.dadosOrdemExec,
    ultimaBoletaAbertaOrdemExec:
      state.GlobalReducer.ultimaBoletaAbertaOrdemExec,
  };
};

const mapStateToPropsStorePrincipal = (state) => ({
  token: state.systemReducer.token,
});

const mapStateToPropsLocal = (state) => ({
  eventSourceBook_Book: state.bookOfertaReducer.esource_offersBook,
});

export default compose(
  connect(
    mapStateToPropsGlobalStore,
    {
      aumentarZindexAction,
      fecharFormAction,
      abrirFormAction,
      receberDadosOrdemExecMainReducerAction,
    },
    null,
    { context: GlobalContext },
  ),
  connect(mapStateToPropsStorePrincipal, {}, null, {
    context: StorePrincipalContext },
  ),
  connect(mapStateToPropsLocal, {
    receberAppPropsAction,
    listarBookOfertaOnEnterAction,
    mudarInputHeaderAction,
    openBoletaFromOrdersExecAction,
  }),
)(AppBoletas);
