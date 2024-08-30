// api.js
import axios from 'axios';

const API_KEY = 'MH21ALTJ1QK843M7.'; // Substitua com sua chave de API

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol,
        interval: '1min', // ou '5min', '15min', etc.
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};
