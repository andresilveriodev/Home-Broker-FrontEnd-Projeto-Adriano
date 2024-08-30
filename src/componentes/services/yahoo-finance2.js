import yahooFinance from 'yahoo-finance2';

export const fetchYahooStockData = async (symbol) => {
  try {
    const queryOptions = { period1: '2023-01-01', period2: '2024-01-01', interval: '1d' }; // Exemplo de período
    const result = await yahooFinance.historical(symbol, queryOptions);
    
    // Log da resposta completa para depuração
    console.log('Resposta completa da API Yahoo:', result);
    
    if (result.length === 0) {
      throw new Error('Nenhum dado disponível para o símbolo especificado.');
    }

    return result;
  } catch (error) {
    console.error('Erro ao buscar dados do Yahoo Finance:', error.message);
    return null;
  }
};
