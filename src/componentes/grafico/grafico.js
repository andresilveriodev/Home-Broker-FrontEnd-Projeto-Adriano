import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid, IconButton, Box } from '@mui/material';
import Draggable from 'react-draggable';
import axios from 'axios'; // Para fazer requisições HTTP

const API_KEY = 'ASMGREH26U0AC53H'; // Sua chave da API

const Grafico = () => {
  const [data, setData] = useState([]);
  const [symbol, setSymbol] = useState('IBM'); // Símbolo inicial
  const [loading, setLoading] = useState(false);

  // Função para buscar e processar dados
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=demo`);
      const jsonData = response.data;
      const timeSeries = jsonData['Time Series (5min)'];

      const formattedData = Object.entries(timeSeries).map(([timestamp, values]) => ({
        x: new Date(timestamp).getTime(), // Converte timestamp para milissegundos
        y: [
          parseFloat(values['1. open']),
          parseFloat(values['2. high']),
          parseFloat(values['3. low']),
          parseFloat(values['4. close'])
        ]
      }));

      setData(formattedData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol]); // Recarrega os dados sempre que o símbolo muda

  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  const options = {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  const series = [{ data }];



  const [isClosed, setIsClosed] = useState(false);

  const handleCloseBloco = () => {
    setIsClosed(true); // Define o estado para fechar o bloco
  };



  if (isClosed) {
    return null;
  }


  return (
    <Draggable>
        <div>
          <Box sx={{border: "4px solid #4b494c", backgroundColor: '#000', color: '#fff', borderRadius: '20px' }}>
              <Grid sx={{display: 'flex', justifyContent: 'flex-end'}} onClick={handleCloseBloco}  >
                  <IconButton >
                      <CancelIcon sx={{ color: '#444444' }}  />
                  </IconButton>
                </Grid>
              <select value={symbol} onChange={handleSymbolChange}>
                <option value="MSFT">Microsoft (MSFT)</option>
                <option value="IBM">IBM (IBM)</option>
                <option value="TSLA">Tesla (TSLA)</option>
              </select>
              {loading ? (
                <p>Loading data...</p>
              ) : (
                <Chart options={options} series={series} type="candlestick" height={350} />
              )}
          </Box>
        </div>
    </Draggable>
  );
};

export default Grafico;
