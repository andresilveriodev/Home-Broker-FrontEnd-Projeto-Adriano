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

export default MatrizDeOpcoes;
