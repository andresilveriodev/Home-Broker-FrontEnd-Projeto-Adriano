import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Draggable from 'react-draggable';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid, IconButton, Box, Typography, Divider } from '@mui/material';

// Dados de exemplo (corrigido para corresponder aos campos das colunas)
const rows = [
  { id: 1, ticker: 'AAPL', tipo: 'CALL', fm: 'Call', mod: 'Mod1', strike: 150, aiotm: 'ATM', diststrike: 2.5, ultimo: 152, var: 1.5, datahora: '18/07/2024 10:00', numdeneg: 100, valfinanceiro: 10000, coberto: true, travado: false, descob: false, tit: 50, lancamento: '18/07/2024' },
  { id: 2, ticker: 'TSLA', tipo: 'PUT', fm: 'Put', mod: 'Mod2', strike: 650, aiotm: 'OTM', diststrike: -3.0, ultimo: 645, var: -0.8, datahora: '19/07/2024 11:00', numdeneg: 200, valfinanceiro: 20000, coberto: false, travado: true, descob: false, tit: 30, lancamento: '19/07/2024' },
  { id: 3, ticker: 'AMZN', tipo: 'CALL', fm: 'Call', mod: 'Mod3', strike: 3200, aiotm: 'ITM', diststrike: 5.0, ultimo: 3210, var: 2.5, datahora: '20/07/2024 12:00', numdeneg: 150, valfinanceiro: 15000, coberto: false, travado: false, descob: true, tit: 20, lancamento: '20/07/2024' },
  { id: 4, ticker: 'GOOGL', tipo: 'PUT', fm: 'Put', mod: 'Mod4', strike: 2500, aiotm: 'OTM', diststrike: -2.0, ultimo: 2480, var: -1.2, datahora: '21/07/2024 13:00', numdeneg: 180, valfinanceiro: 18000, coberto: true, travado: false, descob: false, tit: 40, lancamento: '21/07/2024' },
  { id: 5, ticker: 'MSFT', tipo: 'CALL', fm: 'Call', mod: 'Mod5', strike: 280, aiotm: 'ATM', diststrike: 0.5, ultimo: 282, var: 0.7, datahora: '22/07/2024 14:00', numdeneg: 220, valfinanceiro: 22000, coberto: false, travado: true, descob: false, tit: 60, lancamento: '22/07/2024' },
  { id: 6, ticker: 'NFLX', tipo: 'PUT', fm: 'Put', mod: 'Mod6', strike: 500, aiotm: 'ITM', diststrike: -1.0, ultimo: 495, var: -0.5, datahora: '23/07/2024 15:00', numdeneg: 140, valfinanceiro: 14000, coberto: true, travado: false, descob: true, tit: 70, lancamento: '23/07/2024' },
  // Outros dados
];


const columns = [
  { field: 'ticker', headerName: 'Ticker', flex: 1 },
  { field: 'tipo', headerName: 'Tipo', flex: 1 },
  { field: 'fm', headerName: 'F.M', flex: 1 },
  { field: 'mod', headerName: 'Mod.', flex: 1 },            // Corrigido 'mod.' para 'mod'
  { field: 'strike', headerName: 'Strike', flex: 1 },       // Capitalização corrigida para consistência
  { field: 'aiotm', headerName: 'A/I/OTM', flex: 1 },
  { field: 'diststrike', headerName: 'Dist. (%) do Strike', flex: 1 },
  { field: 'ultimo', headerName: 'Último', flex: 1 },
  { field: 'var', headerName: 'Var. (%)', flex: 1 },        // Espaço adicionado entre 'Var.' e '(%)'
  { field: 'datahora', headerName: 'Data/Hora', flex: 1 },
  { field: 'numdeneg', headerName: 'Núm. de Neg.', flex: 1 },
  { field: 'valfinanceiro', headerName: 'Vol. Financeiro', flex: 1 },
  { field: 'coberto', headerName: 'Coberto', flex: 1 },
  { field: 'travado', headerName: 'Travado', flex: 1 },
  { field: 'descob', headerName: 'Descob.', flex: 1 },
  { field: 'tit', headerName: 'Tit.', flex: 1 },
  { field: 'lancamento', headerName: 'Lançamento', flex: 1 },
];


function ListagemDeOpcao() {
  const [isClosed, setIsClosed] = useState(false);

  const handleCloseBloco = () => {
    setIsClosed(true); // Define o estado para fechar o bloco
  };

  if (isClosed) {
    return null;
  }

  return (
    <Draggable>
      <Box sx={{ border: '3px solid #4b494c', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#000', width: '90%' }}>
        <div>
          <Box sx={{ backgroundColor: '#000', borderRadius: '20px 20px 0 0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '2px', position: 'relative' }}>
              {/* Centraliza o Typography */}
              <Typography sx={{ fontSize: '19px', fontWeight: 500, color: '#fff', flexGrow: 1, textAlign: 'center' }}>
                LISTAGEM DE OPÇÃO
              </Typography>

              {/* Posiciona o IconButton à direita */}
              <Grid sx={{ position: 'absolute', right: 0 }} onClick={handleCloseBloco}>
                <IconButton>
                  <CancelIcon sx={{ color: '#444444' }} />
                </IconButton>
              </Grid>
            </Box>

            <Divider sx={{ backgroundColor: '#4A494C', marginY: '1px', height: '1px' }} />
          </Box>

          <div style={{ height: 350, width: '100%', marginTop: '0px' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={8}
              sx={{
                backgroundColor: '#fff', // Cor de fundo da tabela
                color: '#fff', // Cor do texto
                border: 'none', // Remove a borda ao redor da tabela
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#4A494C', // Cor de fundo dos cabeçalhos das colunas
                  borderBottom: '2px solid #4A494C', // Borda inferior das colunas
                },
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: '#4A494C', // Cor de fundo ao redor do texto do cabeçalho
                  borderBottom: '2px solid #4A494C', // Borda inferior das colunas
                  color: '#fff', // Cor do texto do cabeçalho das colunas
                  height: '60px', // Define a altura do cabeçalho das colunas
                  lineHeight: '60px', // Centraliza verticalmente o texto na nova altura
                },
                '& .MuiDataGrid-cell': {
                  color: '#fff', // Cor do texto das células
                  borderBottom: '1px solid #4A494C', // Borda inferior das células
                  padding: '4px 8px', // Diminui o padding das células (menos espaço entre as informações)
                  backgroundColor: '#292929', // Cor de fundo das células
                },
                '& .MuiDataGrid-row': {
                  backgroundColor: '#333', // Cor de fundo das linhas
                  '&:hover': {
                    backgroundColor: '#444', // Cor de fundo ao passar o mouse
                  },
                },
                '& .MuiDataGrid-footerContainer': {
                  borderTop: 'none', // Remove a borda superior do rodapé da tabela
                  backgroundColor: '#4A494C', // Cor de fundo do rodapé
                  color: '#fff !important', // Força a cor do texto no rodapé
                  '& .MuiTablePagination-root': {
                    color: '#fff', // Aplica a cor do texto no componente de paginação dentro do rodapé
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

export default ListagemDeOpcao;
