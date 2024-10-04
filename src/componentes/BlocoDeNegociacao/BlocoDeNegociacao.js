import React, { useState, useEffect } from 'react';
import { Card, CardContent, Box, Typography, Grid, IconButton, Button, TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ApiAlphaVantage from '../services/apiAlphaVantage';
import Draggable from 'react-draggable';

const BlocoDeNegociacao = () => {
  const [stockName, setStockName] = useState('IBM'); // Valor padrão inicial
  const [price, setPrice] = useState('0.00');
  const [isClosed, setIsClosed] = useState(false);

  const handleCloseBloco = () => {
    setIsClosed(true);
  };

  const handleData = (data) => {
    setPrice(data.close); 
  };

  const handleInputChange = (event) => {
    setStockName(event.target.value);
  };

  useEffect(() => {
    if (stockName) {
      console.log(`Buscando dados para a ação: ${stockName}`);
    }
  }, [stockName]);

  if (isClosed) {
    return null;
  }

  return (
    <Draggable>
      <Card sx={{ width: 300, height: 'auto' , margin: '20px auto', padding: 0, border: "3px solid #4b494c", backgroundColor: '#000', color: '#fff', borderRadius: '20px' }}>
        <ApiAlphaVantage symbol={stockName} onData={handleData} />

        <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 } }}>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 1, marginTop: '6px' }}>
          <Grid container spacing={0} sx={{ alignItems: 'center' }}>
            <Grid item sx={{ position: 'relative', left: '30px' }}>
              <TextField 
                size="small"
                variant="outlined"
                value={stockName}
                onChange={handleInputChange}
                fullWidth
                InputProps={{ style: { color: '#fff', backgroundColor: '#333333', height: '28px' } }}
                sx={{ width: '215px' }}
              />
            </Grid>

            <Grid item sx={{ marginLeft: 'auto' }}>
              <IconButton onClick={handleCloseBloco} sx={{ padding: '0', marginLeft: '8px' }}>
                <CancelIcon sx={{ color: '#444444' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>




          {/* Bloco superior com a cor #262626 */}
          <Box sx={{ width: '100%', backgroundColor: '#262626', height: 24, display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 700, width: '33%', textAlign: 'center', color: '#fff' }}>Qtde</Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 700, width: '33%', textAlign: 'center', color: '#fff' }}>Preço</Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 700, width: '33%', textAlign: 'center', color: '#fff' }}>Operações</Typography>
          </Box>

          {/* Bloco inferior com a cor #1d1d1d */}
          <Box sx={{ width: '100%', backgroundColor: '#1d1d1d', height: 24, display: 'flex', alignItems: 'center', marginTop: '2px' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, width: '33%', textAlign: 'center', color: '#fff' }}>100k</Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, width: '33%', textAlign: 'center', color: '#fff' }}>100k</Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, width: '33%', textAlign: 'center', color: '#fff' }}>{price}</Typography>
          </Box>

          {/* Blocos adicionais */}
          {Array(10).fill(null).map((_, index) => (
            <Box key={index} sx={{ width: '100%', backgroundColor: index % 2 === 0 ? '#262626' : '#1d1d1d', height: 24, display: 'flex', alignItems: 'center', marginTop: '2px' }} />
          ))}



          {/* Conteúdo adicional */}
          <Box sx={{ marginTop: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, marginLeft: '10px' }}>Stop Loss</Typography>
                  <TextField 
                      variant="outlined"
                      type="number"
                      size="small"
                      fullWidth
                      InputProps={{ 
                        style: { 
                          color: '#000',  // Cor do número (preto)
                          backgroundColor: '#bbbbbb', 
                          height: '17px', 
                          width: '88px',
                          left: '10px'
                        },
                        sx: {
                          fontSize: '12px',
                        },

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
                <Grid item xs={4}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>Qtde</Typography>
                  <TextField 
                      variant="outlined"
                      type="number"
                      size="small"
                      fullWidth
                      InputProps={{ 
                        style: { 
                          color: '#000',  // Cor do número (preto)
                          backgroundColor: '#bbbbbb', 
                          height: '17px', 
                        },
                        sx: {
                          fontSize: '12px',
                        },

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
                <Grid item xs={4}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>Gain</Typography>
                  <TextField 
                      variant="outlined"
                      type="number"
                      size="small"
                      fullWidth
                      InputProps={{ 
                        style: { 
                          color: '#000',  // Cor do número (preto)
                          backgroundColor: '#bbbbbb', 
                          height: '17px',
                          right: '10px' 
                        },
                        sx: {
                          fontSize: '12px',
                        },

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
              </Grid>
          </Box>



              <Grid container spacing={2} sx={{ marginTop: -2, marginBottom: 2, }}>
                    <Grid item xs={4}>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        size="small" 
                        sx={{ 
                          backgroundColor: "#dc3545", 
                          width: '88px', 
                          height: '24px',
                          left: '10px',
                          textTransform: 'none',  // Garante que o texto permaneça minúsculo
                        }}
                      >
                        Vender
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="small" 
                        sx={{ 
                          backgroundColor: "#27a746", 
                          width: '88px', 
                          height: '24px',
                          textTransform: 'none'  // Garante que o texto permaneça minúsculo
                        }}
                      >
                        Fechar
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button 
                        variant="contained" 
                        color="success" 
                        size="small" 
                        sx={{ 
                          backgroundColor: "#007bff", 
                          width: '88px', 
                          height: '24px',
                          right: '10px',
                          textTransform: 'none'  // Garante que o texto permaneça minúsculo
                        }}
                      >
                        Comprar
                      </Button>
                    </Grid>
                  </Grid>



        </CardContent>
      </Card>
    </Draggable>
  );
};

export default BlocoDeNegociacao;
