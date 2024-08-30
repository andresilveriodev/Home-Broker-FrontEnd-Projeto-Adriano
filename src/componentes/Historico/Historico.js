import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Draggable from 'react-draggable';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid, IconButton, Box, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// Dados de exemplo
const rows = [
  { id: 1, data: '18/07/2024', abertura: 34.89, fechamento: 35.90, variacao: 3.13, minimo: 34.82, maximo: 36.14, volume: '1,28B' },
  { id: 2, data: '19/07/2024', abertura: 35.00, fechamento: 36.20, variacao: 3.43, minimo: 34.90, maximo: 36.50, volume: '1,35B' },
  { id: 3, data: '20/07/2024', abertura: 36.00, fechamento: 37.10, variacao: 3.05, minimo: 35.50, maximo: 37.50, volume: '1,40B' },
  { id: 4, data: '21/07/2024', abertura: 37.00, fechamento: 36.80, variacao: -0.54, minimo: 36.70, maximo: 37.30, volume: '1,20B' },
  { id: 5, data: '22/07/2024', abertura: 36.90, fechamento: 36.40, variacao: -1.09, minimo: 36.00, maximo: 37.00, volume: '1,15B' },
];

const columns = [
  { field: 'data', headerName: 'Data', width: 150 },
  { field: 'abertura', headerName: 'Abertura', width: 130 },
  { field: 'fechamento', headerName: 'Fechamento', width: 130 },
  { field: 'variacao', headerName: 'Variação', width: 130 },
  { field: 'minimo', headerName: 'Mínimo', width: 130 },
  { field: 'maximo', headerName: 'Máximo', width: 130 },
  { field: 'volume', headerName: 'Volume', width: 130 },
];

function Historico() {

  const [isClosed, setIsClosed] = useState(false);

  const handleCloseBloco = () => {
    setIsClosed(true); // Define o estado para fechar o bloco
  };



  if (isClosed) {
    return null;
  }

  return (

    <Draggable>

      <Box>
              <div style={{ width: '80%' }}>

                <Box sx={{backgroundColor: '#333333'}}>

                   
                      <Box sx={{display: 'flex'}}>
                      <Typography sx={{fontSize: '22px', color: '#fff'}}>histórico de negociação</Typography>

                        <Box>
                          <Typography sx={{fontSize: '22px', color: '#fff'}}>IBM Inc. (IBM)</Typography>
                        </Box>

                        <Box>
                          <Typography sx={{fontSize: '20px', color: '#fff'}}>226.49</Typography>
                          <Typography sx={{fontSize: '15px', color: '#fff'}} variant="body1">-1.54(-0.68%)</Typography>
                          <Typography sx={{fontSize: '11px', color: '#fff'}} variant="body1">-No encerramento: 16h00 EDT</Typography>
                        </Box>

                        <Box>
                          <Typography sx={{fontSize: '20px', color: '#fff'}}>226,29</Typography>
                          <Typography sx={{fontSize: '15px', color: '#fff'}} variant="body1">-0,20(-0,09%)</Typography>
                          <Typography sx={{fontSize: '11px', color: '#fff'}} variant="body1">Após o expediente: 17h20 EDT</Typography>
                        </Box>
                        
                      </Box>

                      <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker />
                        </LocalizationProvider>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker />
                        </LocalizationProvider>
                      </Box>






                    <Grid sx={{display: 'flex', justifyContent: 'flex-end'}} onClick={handleCloseBloco}  >
                          <IconButton >
                            <CancelIcon sx={{ color: '#444444' }}  />
                          </IconButton>
                    </Grid>

                
                </Box>





                <div style={{ height: 350, width: '100%' }}>


                  <DataGrid 
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    sx={{
                      border: "4px solid #4b494c", backgroundColor: '#000', color: '#fff', borderRadius: '20px',
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


    
  );
}

export default Historico;


