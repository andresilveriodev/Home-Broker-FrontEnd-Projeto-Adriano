import api from "./apiConfig";
import { url_stockInfo_symbol } from "./url";

// Função para obter informações sobre um símbolo específico
export const getSymbolInfoAPI = async (symbol) => {
  return api
    .get(`${url_stockInfo_symbol}${symbol}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

// Função para obter dados de múltiplos símbolos
export const getSymbolsDataAPI = async (symbols) => {
  return api
    .get(`price/quotes/symbols?symbols=${symbols}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("symbols batch call error", error);
      return [];
    });
};

// Função para obter informações sobre uma ação específica
export const getStockInfoAPI = async (referenceStock) => {
  return api
    .get(`stocks/${referenceStock}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

// Função para obter dados de um único símbolo
export const getOneSymbolDataAPI = async (symbol) => {
  return api
    .get(`price/quotes/${symbol}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

// Função para obter a estrutura por símbolo
export const getStructureBySymbolAPI = async (symbol) => {
  return api
    .post(`structure/${symbol}`)
    .then((response) => response.data)
    .catch((error) => {
      return null;
    });
};
