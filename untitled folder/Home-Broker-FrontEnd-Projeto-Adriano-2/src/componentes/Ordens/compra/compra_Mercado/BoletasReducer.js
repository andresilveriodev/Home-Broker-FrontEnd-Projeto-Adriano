import {
  MUDAR_ATRIBUTO_BOLETA,
  MUDAR_VALIDADE_SELECT,
  MUDAR_DATA,
  MUDAR_ASSINATURA,
  COMPRAR_AGENDADO,
  FECHAR_CONFIGURAR_STOP,
  MUDAR_CHECK_SALVA_ASSINATURA,
  ADICIONAR_ITEM_TABELA_REDUCAO,
  ADICIONA_ITEM_TABELA_ORDENS_VENDA,
  REMOVE_ITEM_TABELA_GAIN_REDUCAO,
  REMOVE_ITEM_TABELA_ORDENS_MOVEL,
  MUDAR_INPUT_CONFIGURAR,
  ATUALIZAR_EVENT_SOURCE_BOLETAS,
  UPDATE_MANY_BOLETA
} from './ActionTypes';
  import { PESQUISAR_ATIVO_BOLETA_API } from "./ApiActionTypes";
  
  const INITIAL_STATE = {
    orderId: 0,
    dadosPesquisa: {
      resultadoAtivo: "",
      strike: 19.02,
      tipo: "",
      model: "",
      vencimento: "",
      cotacaoAtual: "",
      porcentagem: "",
      ultimoHorario: "",
      stepQtde: 100,
      market: "",
      ativo: "",
    },
    ativo: "PETR4",
    entradaDisparo: "",
    entradaExec: "",
    valorTotal: "",
    gainDisparo: "",
    gainExec: "",
    stopDisparo: "",
    stopExec: "",
    validadeSelect: "DAY",
    date: new Date(),
    assinatura: "",
    preco: "",
    showConfigStop: true,
    checkSalvarAssinatura: true,
    inicioDisparo: "",
    ajustePadrao: "",
    disparo1Ajuste: "",
    disparoMaisAjuste: "",
    stopMais1Ajuste: "",
    stopAnteriorAjuste: "",
    reducao1: "",
    reducao2: "",
    gain: "",
    ajusteAssimetrico: "",
    tabelaOrdens: [],
    tabelaOrdensSimulacao: [],
    tabelaGainReducao: [],
    gainDisparoConfig1: "",
    gainExecConfig1: "",
    stopDisparoConfig1: "",
    stopExecConfig1: "",
    gainDisparoConfig2: "",
    gainExecConfig2: "",
    stopDisparoConfig2: "",
    stopExecConfig2: "",
    qtde: "",
    erro: "",
    esource_boletaQuote: null,
    interval_boletaQuote: null,
  };
  
  export default (namespace) => (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case `${MUDAR_ATIVO}${namespace}`:
        return { ...state, ativo: action.payload };
      case `${MUDAR_ATRIBUTO_BOLETA}${namespace}`:
        return { ...state, [action.atributo]: action.valor };
      case `${MUDAR_VALIDADE_SELECT}${namespace}`:
        return { ...state, validadeSelect: action.payload };
      case `${MUDAR_DATA}${namespace}`:
        return { ...state, date: action.payload };
      case `${MUDAR_ASSINATURA}${namespace}`:
        return { ...state, assinatura: action.payload };
      case `${LIMPAR_FORMS}${namespace}`:
        return { ...INITIAL_STATE };
      case COMPRAR_AGENDADO:
        return { ...state };
      case `${FECHAR_CONFIGURAR_STOP}${namespace}`:
        return { ...state, showConfigStop: false };
      case `${MUDAR_CHECK_SALVA_ASSINATURA}${namespace}`:
        return { ...state, checkSalvarAssinatura: action.payload };
      case `${ADICIONAR_ITEM_TABELA_REDUCAO}${namespace}`:
        return { ...state, tabelaGainReducao: action.payload };
      case `${ADICIONA_ITEM_TABELA_ORDENS_VENDA}${namespace}`:
        return {
          ...state,
          [action.payload.nome]: action.payload.valor,
          ajusteAssimetrico: "",
        };
      case `${REMOVE_ITEM_TABELA_GAIN_REDUCAO}${namespace}`:
        return { ...state, tabelaGainReducao: action.payload };
      case `${REMOVE_ITEM_TABELA_ORDENS_MOVEL}${namespace}`:
        return { ...state, tabelaOrdens: action.payload };
      case `${MUDAR_INPUT_CONFIGURAR}${namespace}`:
        return { ...state, [action.name]: action.payload };
      case `${MUDAR_QTDE}${namespace}`:
        return { ...state, qtde: action.payload.qtde, erro: action.payload.erro };
      case `${PESQUISAR_ATIVO_BOLETA_API}${namespace}`:
        return { ...state, dadosPesquisa: action.payload };
      case `${ATUALIZAR_EVENT_SOURCE_BOLETAS}${namespace}`:
        return { ...state, esource_boletaQuote: action.payload };
      case `${UPDATE_MANY_BOLETA}${namespace}`:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  /*
  const formatarPreco = value => {
    value = value.split(",").join("");
  
    if (value.length > 2) {
      value =
        value.substring(0, value.length - 2) +
        "," +
        value.substring(value.length - 2, value.length);
    }
  
    return value;
  };
  */