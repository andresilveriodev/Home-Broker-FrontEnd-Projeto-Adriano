const API_KEY = 'ASMGREH26U0AC53H';

export const fetchStockData = async (symbol) => { // Mudança aqui
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=demo`);
    const data = await response.json();
    return data;
};

