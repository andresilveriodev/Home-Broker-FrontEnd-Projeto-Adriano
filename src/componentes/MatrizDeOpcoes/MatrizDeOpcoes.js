<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Draggable from 'react-draggable';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid, IconButton, Box, Typography, TextField, Divider, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Search from '../modules/Search';

// Dados de exemplo
const rows = [
  { id: 1, data: '18/07/2024', nomeAcao: 'IBM', abertura: 34.89, fechamento: 35.90, variacao: 3.13, minimo: 34.82, maximo: 36.14, volume: '1,28B' },
  { id: 2, data: '19/07/2024', nomeAcao: 'IBM', abertura: 35.00, fechamento: 36.20, variacao: 3.43, minimo: 34.90, maximo: 36.50, volume: '1,35B' },
  { id: 3, data: '20/07/2024', nomeAcao: 'IBM', abertura: 36.00, fechamento: 37.10, variacao: 3.05, minimo: 35.50, maximo: 37.50, volume: '1,40B' },
  { id: 4, data: '21/07/2024', nomeAcao: 'IBM', abertura: 37.00, fechamento: 36.80, variacao: -0.54, minimo: 36.70, maximo: 37.30, volume: '1,20B' },
  { id: 5, data: '22/07/2024', nomeAcao: 'IBM', abertura: 36.90, fechamento: 36.40, variacao: -1.09, minimo: 36.00, maximo: 37.00, volume: '1,15B' },
];

const columns = [
  { field: 'data', headerName: 'Data', flex: 1 },
  { field: 'nomeAcao', headerName: 'Nome da Ação', flex: 1 },
  { field: 'abertura', headerName: 'Abertura', flex: 1 },
  { field: 'fechamento', headerName: 'Fechamento', flex: 1 },
  { field: 'variacao', headerName: 'Variação', flex: 1 },
  { field: 'minimo', headerName: 'Mínimo', flex: 1 },
  { field: 'maximo', headerName: 'Máximo', flex: 1 },
  { field: 'volume', headerName: 'Volume', flex: 1 },
];

function MatrizDeOpcoes() {
  const [isClosed, setIsClosed] = useState(false);
  const [stockName, setStockName] = useState('IBM');
  const [optionType, setOptionType] = useState('');
  const [days, setDays] = useState('');
  const [financialValue, setFinancialValue] = useState('');

  useEffect(() => {
    if (stockName) {
      console.log(`Buscando dados para a ação: ${stockName}`);
    }
  }, [stockName]);

  if (isClosed) {
    return null;
  }

  const handleSearchClick = () => {
    console.log(`Tipo de Opção: ${optionType}, Dias: ${days}, Valor Financeiro: ${financialValue}`);
    // Lógica para realizar a busca
  };

  return (
    <Draggable>
      <Box sx={{ border: '3px solid #4b494c', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#000', width: '60%' }}>
        <div>
          <Box sx={{ backgroundColor: '#000', borderRadius: '20px 20px 0 0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '2px', position: 'relative' }}>
              <Typography sx={{ fontSize: '19px', fontWeight: 500, color: '#fff', flexGrow: 1, textAlign: 'center' }}>
                MATRIZ DE OPÇÕES
              </Typography>
              <Grid sx={{ position: 'absolute', right: 0 }} onClick={() => setIsClosed(true)}>
                <IconButton>
                  <CancelIcon sx={{ color: '#444444' }} />
                </IconButton>
              </Grid>
            </Box>
            <Divider sx={{ backgroundColor: '#4A494C', marginY: '1px', height: '1px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '10px' }}>
              <FormControl sx={{ minWidth: 120 }} variant="outlined">
                <Select
                  value={optionType}
                  onChange={(e) => setOptionType(e.target.value)}
                  label="Tipo"
                  sx={{ color: '#fff', backgroundColor: '#292929', height: '28px', width: '80px' }}
                >
                  <MenuItem value="CALL">Call</MenuItem>
                  <MenuItem value="PUT">Put</MenuItem>
                </Select>
              </FormControl>
              <Box>
                <Search sx={{ width: 300 }} />
              </Box>
              <FormControl sx={{ minWidth: 120 }} variant="outlined">
                <InputLabel sx={{ color: '#fff' }}>Dias</InputLabel>
                <Select
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  label="Dias"
                  sx={{ color: '#fff', backgroundColor: '#292929', height: '28px', width: '80px' }}
                >
                  {[2, 3, 4, 5, 6, 7, 10, 30, 60, 90, 'Todas'].map((day) => (
                    <MenuItem key={day} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Valor Financeiro (R$)"
                variant="outlined"
                value={financialValue}
                onChange={(e) => setFinancialValue(e.target.value)}
                sx={{ minWidth: 150, color: '#fff', backgroundColor: '#292929', height: '28px', width: '80px' }}
                InputLabelProps={{ style: { color: '#fff' } }}
                InputProps={{ style: { color: '#fff' } }}
              />
              <Button variant="contained" onClick={handleSearchClick} sx={{ height: '28px', width: '80px' }}>
                Pesquisar
              </Button>
            </Box>
            <Divider sx={{ backgroundColor: '#4A494C', marginY: '2px', height: '1px' }} />
          </Box>
          <div style={{ height: 350, width: '100%', marginTop: '0px' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={8}
              sx={{
                backgroundColor: '#fff',
                color: '#fff',
                border: 'none',
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#4A494C',
                  borderBottom: '2px solid #4A494C',
                },
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: '#4A494C',
                  borderBottom: '2px solid #4A494C',
                  color: '#fff',
                  height: '60px',
                  lineHeight: '60px',
                },
                '& .MuiDataGrid-cell': {
                  color: '#fff',
                  borderBottom: '1px solid #4A494C',
                  padding: '4px 8px',
                  backgroundColor: '#292929',
                },
                '& .MuiDataGrid-row': {
                  backgroundColor: '#333',
                  '&:hover': {
                    backgroundColor: '#444',
                  },
                },
                '& .MuiDataGrid-footerContainer': {
                  borderTop: 'none',
                  backgroundColor: '#4A494C',
                  color: '#fff !important',
                  '& .MuiTablePagination-root': {
                    color: '#fff',
                  },
                },
              }}
            />
          </div>
        </div>
      </Box>
    </Draggable>
  );
}
=======
import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const createOptionData = (symbol, type, strike, expiry, name) => {
  return { symbol, type, strike, expiry, name };
};

const optionsData = [
  createOptionData('PETR', 'Call', 25, '2024-07-30', 'PETRT125'),
  createOptionData('PETR', 'Put', 25, '2024-07-30', 'PETRT125P'),
  createOptionData('VALE', 'Call', 50, '2024-08-15', 'VALET150'),
  createOptionData('VALE', 'Put', 50, '2024-08-15', 'VALET150P'),
  // Adicione mais dados conforme necessário
];

const MatrizDeOpcoes = () => {

  const [optionType, setOptionType] = useState('Call');
  const [selectedAction, setSelectedAction] = useState('PETR');

  const handleOptionTypeChange = (event) => {
    setOptionType(event.target.value);
  };

  const handleActionChange = (event) => {
    setSelectedAction(event.target.value);
  };

  const filteredData = optionsData.filter(
    (option) => option.type === optionType && option.symbol === selectedAction
  );

  // Obter preços únicos e datas de expiração para colunas e linhas da matriz
  const strikes = [...new Set(filteredData.map((option) => option.strike))];
  const expiries = [...new Set(filteredData.map((option) => option.expiry))];

  return (
    <Box sx={{ backgroundColor: '#0f0f0f', color: '#fff', minHeight: '100vh', padding: 2, paddingTop: '90px' }}>

      <Typography sx={{fontSize: '25px', paddingBottom: '40px'}}>Matriz de Opções</Typography>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{ color: '#fff' }}>Tipo</InputLabel>
        <Select
          value={optionType}
          onChange={handleOptionTypeChange}
          sx={{ color: '#fff', borderColor: '#fff' }}
          label="Tipo"
        >
          <MenuItem value="Call">Call</MenuItem>
          <MenuItem value="Put">Put</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{ color: '#fff' }}>Ação</InputLabel>
        <Select
          value={selectedAction}
          onChange={handleActionChange}
          sx={{ color: '#fff', borderColor: '#fff' }}
          label="Ação"
        >
          <MenuItem value="PETR">PETR</MenuItem>
          <MenuItem value="VALE">VALE</MenuItem>
          {/* Adicione mais opções conforme necessário */}
        </Select>
      </FormControl>

      <TableContainer component={Paper} sx={{ backgroundColor: '#0f0f0f' }}>
        <Table sx={{ minWidth: 650 }} aria-label="option matrix table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Strike / Expiry</TableCell>
              {expiries.map((expiry) => (
                <TableCell key={expiry} sx={{ color: '#fff' }} align="center">
                  {expiry}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {strikes.map((strike) => (
              <TableRow key={strike}>
                <TableCell component="th" scope="row" sx={{ color: '#fff' }}>
                  {strike}
                </TableCell>
                {expiries.map((expiry) => {
                  const option = filteredData.find((opt) => opt.strike === strike && opt.expiry === expiry);
                  return (
                    <TableCell key={expiry} align="center" sx={{ color: '#fff' }}>
                      {option ? option.name : '-'}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74

export default MatrizDeOpcoes;
