import React, { useEffect } from 'react';
import { fetchStockData } from './services';

const ApiAlphaVantage = ({ symbol, onData }) => {
  useEffect(() => {
    fetchStockData(symbol).then(data => {
      const timeSeries = data['Time Series (5min)'];
      const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
      const latestData = timeSeries[lastRefreshed];

      // Chama onData com os dados necessários
      onData({
        open: latestData['1. open'],
        high: latestData['2. high'],
        low: latestData['3. low'],
        close: latestData['4. close'],
        volume: latestData['5. volume'],
      });
    });
  }, [symbol, onData]);

  return null;
};

export default ApiAlphaVantage;
