<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, {useState, useEffect} from 'react';
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
import { DataGrid } from '@mui/x-data-grid';
import Draggable from 'react-draggable';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid, IconButton, Box, Typography, TextField, Divider, Button, Popover } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
<<<<<<< HEAD
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '../modules/Search';
=======
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74

// Dados de exemplo
const rows = [
  { id: 1, data: '18/07/2024', abertura: 34.89, fechamento: 35.90, variacao: 3.13, minimo: 34.82, maximo: 36.14, volume: '1,28B' },
  { id: 2, data: '19/07/2024', abertura: 35.00, fechamento: 36.20, variacao: 3.43, minimo: 34.90, maximo: 36.50, volume: '1,35B' },
  { id: 3, data: '20/07/2024', abertura: 36.00, fechamento: 37.10, variacao: 3.05, minimo: 35.50, maximo: 37.50, volume: '1,40B' },
  { id: 4, data: '21/07/2024', abertura: 37.00, fechamento: 36.80, variacao: -0.54, minimo: 36.70, maximo: 37.30, volume: '1,20B' },
  { id: 5, data: '22/07/2024', abertura: 36.90, fechamento: 36.40, variacao: -1.09, minimo: 36.00, maximo: 37.00, volume: '1,15B' },
];

const columns = [
<<<<<<< HEAD
  { field: 'data', headerName: 'Data', flex: 1 }, // flex ajusta o tamanho automaticamente
  { field: 'abertura', headerName: 'Abertura', flex: 1 },
  { field: 'fechamento', headerName: 'Fechamento', flex: 1 },
  { field: 'variacao', headerName: 'Variação', flex: 1 },
  { field: 'minimo', headerName: 'Mínimo', flex: 1 },
  { field: 'maximo', headerName: 'Máximo', flex: 1 },
  { field: 'volume', headerName: 'Volume', flex: 1 },
];

function Historico() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
=======
  { field: 'data', headerName: 'Data', width: 150 },
  { field: 'abertura', headerName: 'Abertura', width: 130 },
  { field: 'fechamento', headerName: 'Fechamento', width: 130 },
  { field: 'variacao', headerName: 'Variação', width: 130 },
  { field: 'minimo', headerName: 'Mínimo', width: 130 },
  { field: 'maximo', headerName: 'Máximo', width: 130 },
  { field: 'volume', headerName: 'Volume', width: 130 },
];

function Historico() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
  const [isClosed, setIsClosed] = useState(false);
  const [stockName, setStockName] = useState('IBM'); // Valor padrão inicial

  const handleCloseBloco = () => {
    setIsClosed(true); // Define o estado para fechar o bloco
  };

  const handleInputChange = (event) => {
    setStockName(event.target.value); // Atualiza o nome da ação
  };

  useEffect(() => {
    // O efeito será chamado toda vez que `stockName` mudar
    if (stockName) {
      console.log(`Buscando dados para a ação: ${stockName}`);
      // Aqui, você pode chamar a API diretamente ou esperar que o componente `ApiAlphaVantage` cuide disso
    }
  }, [stockName]);

<<<<<<< HEAD
=======


>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
  if (isClosed) {
    return null;
  }

<<<<<<< HEAD
=======

>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'date-range-popover' : undefined;

  const handlePeriodClick = (period) => {
    // Lógica para ajustar as datas com base no período selecionado (1D, 5D, etc.)
    console.log(`Período selecionado: ${period}`);
  };

<<<<<<< HEAD
  return (
    <Draggable>
          <Box sx={{ border: '3px solid #4b494c', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#000', width: '60%'  }}>
            <div style={{ }}>
              <Box sx={{ backgroundColor: '#000', borderRadius: '20px 20px 0 0' }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '2px', position: 'relative' }}>
                    {/* Centraliza o Typography */}
                    <Typography sx={{ fontSize: '19px', fontWeight: 500, color: '#fff', flexGrow: 1, textAlign: 'center' }}>
                      HISTÓRICO DE NEGOCIAÇÃO
                    </Typography>

                    {/* Posiciona o IconButton à direita */}
                    <Grid sx={{ position: 'absolute', right: 0 }} onClick={handleCloseBloco}>
                      <IconButton>
                      <CancelIcon sx={{ color: '#444444' }} />
                      </IconButton>
                    </Grid>
                  </Box>

                  <Divider sx={{ backgroundColor: '#4A494C', marginY: '1px', height: '1px' }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '2px' }}>

                    <Grid item xs={8}>
                      <Search />
                    </Grid>

                    <Box>
                      <Typography sx={{ fontSize: '16px', color: '#fff' }}>IBM Inc. (IBM)</Typography>
                    </Box>

                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography sx={{ fontSize: '16px', color: '#fff' }}>226.49</Typography>
                        <Typography sx={{ fontSize: '16px', color: '#fff' }} variant="body1">
                          -1.54(-0.68%)
                        </Typography>
                      </Box>

                      <Typography sx={{ fontSize: '11px', color: '#fff' }} variant="body1">
                        No encerramento: 16h00 EDT
                      </Typography>
                    </Box>

                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography sx={{ fontSize: '16px', color: '#fff' }}>226,29</Typography>
                        <Typography sx={{ fontSize: '16px', color: '#fff' }} variant="body1">
                          -0,20(-0,09%)
                        </Typography>
                      </Box>

                      <Typography sx={{ fontSize: '11px', color: '#fff' }} variant="body1">
                        Após o expediente: 17h20 EDT
                      </Typography>
                    </Box>

                  </Box>

                  <Divider sx={{ backgroundColor: '#4A494C', marginY: '2px', height: '1px' }} />
                </Box>

                <Box sx={{ paddingBottom: '1px', marginLeft: '40px' }}>
                  {/* Texto que abre o Popover ao ser clicado */}
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ color: '#fff', marginRight: '10px' }}>Período:</Typography>
                    <Typography onClick={handleClick} sx={{ cursor: 'pointer', color: '#fff', fontSize: '16px' }}>
                      Feb 29, 2024 - Aug 29, 2024
                    </Typography>
                  </Box>

                  {/* Popover que aparece ao clicar */}
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Box sx={{ padding: '16px', paddingBottom: '15px', marginBottom: '15px' }}>
                      {/* Botões de períodos rápidos */}
                      <Grid container spacing={1} justifyContent="center">
                        {['1D', '5D', '3M', '6M', '1A', '5A', 'Máx'].map((period) => (
                          <Grid item key={period}>
                            <Button variant="outlined" onClick={() => handlePeriodClick(period)}>
                              {period}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>

                      {/* Seletor de datas manual */}
                      <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Data de início"
                            value={startDate}
                            onChange={(newValue) => setStartDate(newValue)}
                            renderInput={(params) => <TextField {...params} size="small" />}
                          />
                          <DatePicker
                            label="Data de término"
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
                            renderInput={(params) => <TextField {...params} size="small" />}
                          />
                        </LocalizationProvider>
                      </Box>

                      {/* Botões de ação */}
                      <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleClose} sx={{ marginRight: '8px' }}>
                          Cancelar
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                          Concluído
                        </Button>
                      </Box>
                    </Box>
                  </Popover>
                </Box>
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

=======

  return (

    <Draggable>

      <Box>
              <div style={{ width: '80%' }}>

                <Box sx={{backgroundColor: '#333333'}}>

                   
                    <Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '8px', position: 'relative' }}>
                            {/* Centraliza o Typography */}
                            <Typography sx={{ fontSize: '19px', color: '#fff', flexGrow: 1, textAlign: 'center', fontWeight: 'lighter' }}>
                              HISTÓRICO DE NEGOCIAÇÃO
                            </Typography>

                            {/* Posiciona o IconButton à direita */}
                            <Grid sx={{ position: 'absolute', right: 0 }} onClick={handleCloseBloco}>
                              <IconButton>
                                <CancelIcon sx={{ color: '#AFAFAF' }} />
                              </IconButton>
                            </Grid>
                      </Box>


                      <Divider sx={{ backgroundColor: '#4A494C', marginY: '8px', height: '3px', }} />

                      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingTop: '15px'}}> 

                          <Grid item xs={8}>

                                <TextField 
                                  size="small"
                                  label="Nome da Ação" 
                                  variant="outlined" 
                                  value={stockName} 
                                  onChange={handleInputChange}
                                  fullWidth
                                  InputLabelProps={{ style: { color: '#fff' } }}
                                  InputProps={{
                                    style: { color: '#fff' },
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <SearchIcon sx={{ color: '#fff' }} />
                                      </InputAdornment>
                                    ),
                                  }}
                                  sx={{
                                    '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#fff',
                                    },
                                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#fff',
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#fff',
                                    },
                                  }}
                                />
                        </Grid>


                            <Box>
                              <Typography sx={{fontSize: '18px', color: '#fff'}}>IBM Inc. (IBM)</Typography>
                            </Box>

                            <Box>
                              <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                                <Typography sx={{fontSize: '17px', color: '#fff'}}>226.49</Typography>
                                <Typography sx={{fontSize: '17px', color: '#fff', }} variant="body1">-1.54(-0.68%)</Typography>
                              </Box>

                              <Typography sx={{fontSize: '11px', color: '#fff'}} variant="body1">-No encerramento: 16h00 EDT</Typography>
                            </Box>

                            <Box>
                              <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                                <Typography sx={{fontSize: '17px', color: '#fff'}}>226,29</Typography>
                                <Typography sx={{fontSize: '17px', color: '#fff'}} variant="body1">-0,20(-0,09%)</Typography>
                              </Box>
                              
                              <Typography sx={{fontSize: '11px', color: '#fff'}} variant="body1">Após o expediente: 17h20 EDT</Typography>
                            </Box>

                      </Box>

                      <Divider sx={{ backgroundColor: '#4A494C', marginY: '8px', height: '3px', }} />
                        
                      </Box>

                    <Box sx={{paddingBottom: '10px', marginLeft: '40px'}}>
                            {/* Texto que abre o Popover ao ser clicado */}

                            <Box sx={{display: 'flex'}}>
                                <Typography sx={{ color: '#fff', marginRight: '10px' }}>Período:</Typography>
                                <Typography 
                                  onClick={handleClick}
                                  sx={{ cursor: 'pointer', color: '#fff' }}
                                >
                                  Feb 29, 2024 - Aug 29, 2024
                                </Typography>
                            </Box>



                            {/* Popover que aparece ao clicar */}
                            <Popover
                              id={id}
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                            >
                              <Box sx={{ padding: '16px', paddingBottom: '15px', marginBottom: '15px' }}>
                                {/* Botões de períodos rápidos */}
                                <Grid container spacing={1} justifyContent="center">
                                  {['1D', '5D', '3M', '6M', '1A', '5A', 'Máx'].map((period) => (
                                    <Grid item key={period}>
                                      <Button variant="outlined" onClick={() => handlePeriodClick(period)}>
                                        {period}
                                      </Button>
                                    </Grid>
                                  ))}
                                </Grid>

                                {/* Seletor de datas manual */}
                                <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
                                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                      label="Data de início"
                                      value={startDate}
                                      onChange={(newValue) => setStartDate(newValue)}
                                      renderInput={(params) => <TextField {...params} size="small" />}
                                    />
                                    <DatePicker
                                      label="Data de término"
                                      value={endDate}
                                      onChange={(newValue) => setEndDate(newValue)}
                                      renderInput={(params) => <TextField {...params} size="small" />}
                                    />
                                  </LocalizationProvider>
                                </Box>

                                  {/* Botões de ação */}
                                  <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button onClick={handleClose} sx={{ marginRight: '8px' }}>
                                      Cancelar
                                    </Button>
                                    <Button variant="contained" onClick={handleClose}>
                                      Concluído
                                    </Button>
                                  </Box>
                                </Box>
                              </Popover>

                    </Box>


                </Box>





                <div style={{ height: 350, width: '100%', marginTop: '0px' }}>


                  <DataGrid 
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    sx={{
                      border: "4px solid #4b494c", backgroundColor: '#000', color: '#fff', borderRadius: '0px',
                      '& .MuiDataGrid-cell': {
                        color: '#fff', // Cor do texto das células
                      },
                      '& .MuiDataGrid-columnHeaderTitle': {
                        color: '#000', // Cor do texto do título da coluna
                      },
                      '& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-select, & .MuiTablePagination-displayedRows': {
                        color: '#fff', // Cor do texto da barra de paginação
                      },
                      '& .MuiDataGrid-footerContainer': {
                        color: '#fff', // Cor do texto do rodapé
                      },
                      '& .MuiDataGrid-row': {
                        backgroundColor: '#333', // Cor de fundo das linhas
                      },
                      '& .MuiDataGrid-iconSeparator': {
                        color: '#fff', // Cor do ícone de separador
                      },
                    }}
                  />
                </div>
              </div>
      </Box>
       
    </Draggable>


    
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
  );
}

export default Historico;
<<<<<<< HEAD
=======


>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
