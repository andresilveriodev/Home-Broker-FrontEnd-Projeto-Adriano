import { cloneDeep } from "lodash";
import {
  pesquisarAtivoAPI,
  setPointerWhileAwaiting,
  pesquisarStrikesMultilegAPI,
} from "api/API";
import { calculatePrice } from "modules/multileg/screens/CalculoPreco";
import {
  findClosestStrike,
  AddNewMultilegQuote,
  checkQuoteAlreadyAdded,
  updateOneMultilegState,
  updateManyMultilegState,
} from "./utils";
import { formatarNumero } from "shared/utils/Formatacoes";

export const updateMultilegStateAction = (attributeName, attributeValue) => {
  return (dispatch) => {
    dispatch(updateOneMultilegState({ attributeName, attributeValue }));
  };
};

export const openCloseMultilegExtraConfigsAction = () => {
  return (dispatch, getState) => {
    const {
      multilegReducer: { configComplementarAberto },
    } = getState();

    dispatch(
      updateMultilegStateAction(
        "configComplementarAberto",
        !configComplementarAberto
      )
    );
  };
};

export const selectOrAddMultilegTabAction = (key) => {
  return (dispatch, getState) => {
    const {
      multilegReducer: { multileg },
    } = getState();

    if (key === "adicionar") {
      const { multilegTabs, currentTab } = addMultilegTab(multileg);
      dispatch(
        updateManyMultilegState({
          multileg: multilegTabs,
          abaSelecionada: currentTab,
        })
      );
    } else {
      dispatch(updateMultilegStateAction("abaSelecionada", key));
    }
  };
};

export const addMultilegTab = (multilegTabs) => {
  const updatedMultilegTabs = cloneMultilegTabs(multilegTabs);

  const newTab = cloneDeep(newMultilegTab);
  newTab.nomeAba = `Ordem ${updatedMultilegTabs.length + 1}`;
  const currentTab = `tab${updatedMultilegTabs.length}`;

  updatedMultilegTabs.push(newTab);

  return { multilegTabs: updatedMultilegTabs, currentTab };
};

export const removeMultilegTabAction = (tabIndex) => {
  return (dispatch, getState) => {
    const {
      multilegReducer: { multileg },
    } = getState();

    const updatedMultilegTabs = cloneMultilegTabs(multileg);

    if (tabIndex > 0) {
      const key = `tab${tabIndex - 1}`;
      dispatch(updateMultilegStateAction("abaSelecionada", key));
    }

    updatedMultilegTabs.splice(tabIndex, 1);

    dispatch(updateMultilegStateAction("multileg", updatedMultilegTabs));
  };
};

export const updateMultilegTabAction = ({
  tabIndex,
  attributeName,
  attributeValue,
}) => {
  return async (dispatch, getState) => {
    const {
      multilegReducer: { multileg, cotacoesMultileg },
    } = getState();

    const data = await updateMultilegTab({
      multilegTabs: multileg,
      tabIndex,
      attributeName,
      attributeValue,
      multilegQuotes: cotacoesMultileg,
    });

    dispatch(updateMultilegStateAction("multileg", data.multilegTabs));
    if (data.multilegQuotes) {
      dispatch(
        updateMultilegStateAction("cotacoesMultileg", data.multilegQuotes)
      );
    }
  };
};

export const updateMultilegTab = async ({
  multilegTabs,
  tabIndex,
  attributeName,
  attributeValue,
  multilegQuotes,
}) => {
  setPointerWhileAwaiting({ lockMode: "travar", id: "multileg" });

  let value = attributeValue;

  const updatedMultilegtabs = cloneMultilegTabs(multilegTabs);
  let updatedMultilegQuotes;

  if (attributeName === "limpar") {
    updatedMultilegtabs[tabIndex] = cloneDeep(newMultilegTab);
    updatedMultilegtabs[tabIndex].nomeAba = `Ordem ${tabIndex + 1}`;

    console.log("limpou,", updatedMultilegtabs[tabIndex]);
  } else {
    if (attributeName === "ativo") {
      value = value.toUpperCase();
    }

    Object.assign(updatedMultilegtabs[tabIndex], {
      [attributeName]: value,
    });

    if (attributeName === "vencimentoSelecionado" && multilegQuotes) {
      updatedMultilegQuotes = cloneMultilegQuotes(multilegQuotes);
      const symbol = multilegTabs[tabIndex].ativoAtual;

      updatedMultilegtabs[tabIndex].ativo = symbol;

      if (
        !checkQuoteAlreadyAdded({
          multilegQuotes: updatedMultilegQuotes,
          symbol,
        })
      ) {
        const symbolData = await pesquisarAtivoAPI(symbol);

        const quote = symbolData.cotacaoAtual;

        AddNewMultilegQuote({
          multilegQuotes: updatedMultilegQuotes,
          symbol,
          quote,
        });
      }

      const options = await pesquisarStrikesMultilegAPI(symbol, attributeValue);
      if (options) {
        updatedMultilegtabs[tabIndex].opcoes = [...options];
        updatedMultilegtabs[tabIndex].strikeSelecionado = findClosestStrike({
          options,
          symbolQuote: updatedMultilegtabs[tabIndex].strikeSelecionado,
        });
      }
    }
  }
  setPointerWhileAwaiting({ lockMode: "destravar", id: "multileg" });
  return {
    multilegTabs: updatedMultilegtabs,
    multilegQuotes: updatedMultilegQuotes,
  };
};

export const updateMultilegOfferAction = ({
  tabIndex,
  attributeName,
  attributeValue,
  lineIndex,
}) => {
  return async (dispatch, getState) => {
    setPointerWhileAwaiting({ lockMode: "travar", id: "multileg" });

    const {
      multilegReducer: { multileg, cotacoesMultileg },
    } = getState();

    const updatedMultilegTabs = cloneMultilegTabs(multileg);
    const multilegOffer =
      updatedMultilegTabs[tabIndex].tabelaMultileg[lineIndex];
    let updatedMultilegQuotes = cloneMultilegQuotes(cotacoesMultileg);

    const previousSymbol = multilegOffer.codigoSelecionado;

    if (attributeName === "tipo") {
      if (attributeValue === "call") multilegOffer[attributeName] = "put";
      else if (attributeValue === "put") multilegOffer[attributeName] = "call";
      setOfferSymbolAndModel(multilegOffer);
    } else {
      Object.assign(multilegOffer, { [attributeName]: attributeValue });

      if (attributeName === "serieSelecionada") {
        const options = await pesquisarStrikesMultilegAPI(
          multilegOffer.ativoAtual,
          attributeValue
        );
        if (options && options.length) {
          multilegOffer.opcoes = [...options];

          const foundOption = multilegOffer.opcoes.find((optionsItem) => {
            const option = optionsItem;
            return option.strike === multilegOffer.strikeSelecionado;
          });

          if (!foundOption) {
            multilegOffer.strikeSelecionado = findClosestStrike({
              options,
              symbolQuote: multilegOffer.strikeSelecionado,
            });
          }
          setOfferSymbolAndModel(multilegOffer);
        }
      } else if (attributeName === "strikeSelecionado") {
        setOfferSymbolAndModel(multilegOffer);
      } else if (attributeName === "codigoSelecionado") {
        setOfferModelTypeStrikeAndSeries(multilegOffer);
      }
    }

    if (previousSymbol !== multilegOffer.codigoSelecionado) {
      updatedMultilegQuotes = cloneMultilegQuotes(updatedMultilegQuotes);

      AddNewMultilegQuote({
        multilegQuotes: updatedMultilegQuotes,
        symbol: multilegOffer.codigoSelecionado,
      });
    }

    const tab = updatedMultilegTabs[tabIndex];
    let tabPrice = calculatePrice({
      multilegTab: tab,
      type: "ultimo",
      multilegQuotes: updatedMultilegQuotes,
    }).toFixed(2);

    tabPrice = formatarNumero(tabPrice, 2, ".", ",");
    tab.preco = tabPrice;

    dispatch(
      updateManyMultilegState({
        cotacoesMultileg: updatedMultilegQuotes,
        multileg: updatedMultilegTabs,
      })
    );

    setPointerWhileAwaiting({ lockMode: "destravar", id: "multileg" });
  };
};

export const removeMultilegOfferAction = ({ tabIndex, lineIndex }) => {
  return (dispatch, getState) => {
    const {
      multilegReducer: { multileg },
    } = getState();

    const multilegTabs = cloneMultilegTabs(multileg);
    multilegTabs[tabIndex].tabelaMultileg.splice(lineIndex, 1);

    dispatch(updateMultilegStateAction("multileg", multilegTabs));
  };
};

export const addMultilegOfferAction = ({ tabIndex, offerType }) => {
  return async (dispatch, getState) => {
    setPointerWhileAwaiting({
      lockMode: "travar",
      id: "multileg",
      parentID: "body",
    });

    const {
      multilegReducer: { multileg, cotacoesMultileg },
    } = getState();

    if (multileg[tabIndex].tabelaMultileg.length < 6) {
      const data = await addMultilegOffer({
        multilegTabs: multileg,
        offerType,
        tabIndex,
        multilegQuotes: cotacoesMultileg,
      });

      dispatch(
        updateManyMultilegState({
          multileg: data.multilegTabs,
          cotacoesMultileg: data.multilegQuotes,
        })
      );
    }

    setPointerWhileAwaiting({
      lockMode: "destravar",
      id: "multileg",
      parentID: "body",
    });
  };
};

export const addMultilegOffer = async ({
  multilegTabs,
  offerType,
  tabIndex,
  multilegQuotes,
}) => {
  const updatedTabs = cloneMultilegTabs(multilegTabs);
  multilegQuotes = cloneMultilegQuotes(multilegQuotes);

  const offer = cloneDeep(newOffer);
  let quote = 0;

  offer.ativoAtual = updatedTabs[tabIndex].ativoAtual;

  if (offerType === "acao") {
    offer.opcoes = [{ symbol: updatedTabs[tabIndex].ativoAtual }];
    offer.codigoSelecionado = updatedTabs[tabIndex].ativoAtual;
  } else {
    const strike = updatedTabs[tabIndex].strikeSelecionado;
    if (strike) offer.strikeSelecionado = strike;
    offer.serie = [...updatedTabs[tabIndex].vencimento];
    offer.serieSelecionada = updatedTabs[tabIndex].vencimentoSelecionado;
    offer.opcoes = [...updatedTabs[tabIndex].opcoes];

    if (offerType === "call") {
      offer.tipo = "call";
    } else if (offerType === "put") {
      offer.tipo = "put";
    }
    setOfferSymbolAndModel(offer);
  }
  const newSymbol = offer.codigoSelecionado;

  if (!checkQuoteAlreadyAdded({ multilegQuotes, symbol: newSymbol })) {
    const symbolData = await pesquisarAtivoAPI(offer.codigoSelecionado);
    if (symbolData) {
      quote = Number(symbolData.cotacaoAtual);
    }
  }

  AddNewMultilegQuote({
    multilegQuotes,
    symbol: newSymbol,
    quote,
  });

  updatedTabs[tabIndex].tabelaMultileg.push(offer);

  const tab = updatedTabs[tabIndex];
  let tabPrice = calculatePrice({
    multilegTab: tab,
    type: "ultimo",
    multilegQuotes,
  }).toFixed(2);
  tabPrice = formatarNumero(tabPrice, 2, ".", ",");
  tab.preco = tabPrice;

  return { multilegTabs: updatedTabs, multilegQuotes };
};

const newOffer = {
  opcoes: [],
  strikeSelecionado: 0,
  cv: "compra",
  qtde: 0,
  serie: [],
  serieSelecionada: "",
  codigoSelecionado: "",
  tipo: "call",
  modelo: "AMERICAN",
  despernamento: 1000,
  prioridade: 0,
  ativoAtual: "",
};

const newMultilegTab = {
  nomeAba: "",
  ativo: "",
  ativoAtual: "",
  variacao: 0,
  opcoes: [],
  strikeSelecionado: 0,
  codigoAberto: false,
  vencimento: [],
  vencimentoSelecionado: "",
  preco: "",
  validadeSelect: "DAY",
  date: new Date(),
  tabelaMultileg: [],
  isAlertOpen: false,
  operator: "Less",
  param: "Bid",
  comment: "",
  selectedStrategy: 1,
  market: "",
  editingOrderId: null,
};

const setOfferSymbolAndModel = (multilegOffer) => {
  multilegOffer.opcoes.forEach((optionsItem) => {
    const option = optionsItem;
    if (
      option.strike === multilegOffer.strikeSelecionado &&
      option.type === multilegOffer.tipo.toUpperCase()
    ) {
      multilegOffer.codigoSelecionado = option.symbol;
      multilegOffer.modelo = option.model;
    }
  });
};

const setOfferModelTypeStrikeAndSeries = (multilegOffer) => {
  multilegOffer.opcoes.forEach((optionsItem) => {
    const option = optionsItem;

    if (option.symbol === multilegOffer.codigoSelecionado) {
      multilegOffer.modelo = option.model;
      multilegOffer.tipo = option.type === "CALL" ? "call" : "put";
      multilegOffer.strikeSelecionado = option.strike;
      multilegOffer.serieSelecionada = option.expiration;
    }
  });
};

export const cloneMultilegTabs = (multilegTabs) =>
  multilegTabs.map((multilegTab) => ({
    ...multilegTab,
    opcoes: multilegTab.opcoes.map((option) => ({ ...option })),
    vencimento: [...multilegTab.vencimento],
    tabelaMultileg: multilegTab.tabelaMultileg.map((offer) => ({ ...offer })),
  }));

export const cloneMultilegQuotes = (multilegQuotes) =>
  multilegQuotes.map((quote) => ({ ...quote }));

export const updateMultilegPriceAction = (tabIndex) => {
  return (dispatch, getState) => {
    const {
      multilegReducer: { multileg, cotacoesMultileg },
    } = getState();

    const tab = multileg[tabIndex];
    const price = tab.preco;

    let newPrice = calculatePrice({
      multilegTab: tab,
      type: "ultimo",
      multilegQuotes: cotacoesMultileg,
    }).toFixed(2);
    newPrice = formatarNumero(newPrice, 2, ".", ",");

    if (price !== newPrice && !Number.isNaN(newPrice)) {
      dispatch(
        updateMultilegTabAction({
          tabIndex,
          attributeName: "preco",
          attributeValue: newPrice,
        })
      );
    }
  };
};
