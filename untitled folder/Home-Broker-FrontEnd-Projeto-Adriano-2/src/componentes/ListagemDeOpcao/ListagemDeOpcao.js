import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, TextField, Button, Box, Typography, IconButton } from '@mui/material';
import Draggable from 'react-draggable';
import CancelIcon from '@mui/icons-material/Cancel';

// Colunas da tabela
const columns = [
  {
    field: 'quantidade',
    headerName: 'Qtd',
    width: 150,
    renderCell: (params) => (
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={6}>
          <TextField variant="outlined" size="small" />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" size="small">Pesquisar</Button>
        </Grid>
      </Grid>
    ),
  },
  {
    field: 'acao',
    headerName: 'Ação',
    width: 150,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ color: 'white' }}>
        PETRO4 37,54
      </Typography>
    ),
  },
  {
    field: 'opcao',
    headerName: 'Opção',
    width: 200,
    renderCell: (params) => (
      <Box>
        <Typography variant="body2" sx={{ color: 'white' }}>
          PETRK274
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Exercício: 27,42
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Compra: 1,04 | 5k
        </Typography>
      </Box>
    ),
  },
  {
    field: 'valorIntrinseco',
    headerName: 'Valor Intrínseco',
    width: 150,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ color: 'white' }}>
        R$ 0,00
      </Typography>
    ),
  },
  {
    field: 'valorExtrinseco',
    headerName: 'Valor Extrínseco',
    width: 150,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ color: 'white' }}>
        R$ 0,00
      </Typography>
    ),
  },
  {
    field: 'lucro',
    headerName: 'Lucro',
    width: 100,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ color: 'white' }}>
        2,98%
      </Typography>
    ),
  },
  {
    field: 'lucroMax',
    headerName: 'Lucro Máx',
    width: 100,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ color: 'white' }}>
        9,96%
      </Typography>
    ),
  },
  {
    field: 'vencimento',
    headerName: 'Vencimento',
    width: 150,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ color: 'white' }}>
        19/11/2024
      </Typography>
    ),
  },
  {
    field: 'diasVencimento',
    headerName: 'Dias p/ Vencimento',
    width: 150,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ color: 'white' }}>
        34
      </Typography>
    ),
  },
];

// Dados de exemplo (a serem substituídos por dados dinâmicos)
const rows = [
  {
    id: 1,
    quantidade: '',
    acao: 'PETRO4 37,54',
    opcao: '',
    valorIntrinseco: 'R$ 0,00',
    valorExtrinseco: 'R$ 0,00',
    lucro: '2,98%',
    lucroMax: '9,96%',
    vencimento: '19/11/2024',
    diasVencimento: 34,
  },
  // Adicione mais linhas conforme necessário
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
            <div style={{ height: 400, width: '100%' }}>

            <Grid sx={{display: 'flex', justifyContent: 'flex-end'}} onClick={handleCloseBloco}  >
                    <IconButton >
                      <CancelIcon sx={{ color: '#444444' }}  />
                    </IconButton>
              </Grid>

            <DataGrid
                
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                sx={{
                border: '1px solid #ddd',
                '& .MuiDataGrid-cell': {
                    padding: '8px',
                },
                '& .MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 'bold',
                },
                '& .MuiDataGrid-row': {
                    backgroundColor: '#333', // Exemplo de fundo escuro
                },
                }}
            />
            </div>
    </Draggable>

  );
}

export default ListagemDeOpcao;

