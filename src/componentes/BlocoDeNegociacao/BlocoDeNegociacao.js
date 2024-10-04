import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Card, CardContent, Box, Typography, Grid, IconButton, Button, TextField } from '@mui/material';
=======
import { Card, CardContent, Box, Typography, Button, Grid, IconButton, TextField } from '@mui/material';
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
import CancelIcon from '@mui/icons-material/Cancel';
import ApiAlphaVantage from '../services/apiAlphaVantage';
import Draggable from 'react-draggable';

<<<<<<< HEAD
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
=======

const BlocoDeNegociacao = ({}) => {
  const [stockName, setStockName] = useState('IBM'); // Valor padrão inicial
  const [price, setPrice] = useState('0.00');
  const [percentChange, setPercentChange] = useState('+0.0%');
  const [isClosed, setIsClosed] = useState(false);

  // Função para fechar o bloco
  const handleCloseBloco = () => {
    setIsClosed(true); // Define o estado para fechar o bloco
  };

  // Função para lidar com os dados recebidos
  const handleData = (data) => {
    console.log('Dados recebidos:', data);
    setPrice(data.close); // Atualiza o preço com o valor de fechamento
    // Atualize outros estados conforme necessário
  };

  // Função chamada quando o usuário digita no campo de texto
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

    // Se o bloco estiver fechado, não renderiza o componente
    if (isClosed) {
      return null;
    }

  return (
    
    <Draggable>

    <Card sx={{ maxWidth: 345, margin: '20px auto', padding: 2, border: "4px solid #4b494c", backgroundColor: '#000', color: '#fff', borderRadius: '20px' }}>
      
      <ApiAlphaVantage symbol={stockName} onData={handleData} />

      <CardContent>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}  >

          <Grid container spacing={1} sx={{ alignItems: 'center', marginTop: '10', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', }}>

            <Grid item xs={8}>
              {/* Atualize o TextField para mostrar o stockName e permitir edição */}
              <TextField 
                size="small"
                label="Nome da Ação" 
                variant="outlined" 
                value={stockName} 
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{ style: { color: '#fff' } }}
                InputProps={{ style: { color: '#fff' } }}
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

            <Grid item>
              <IconButton onClick={handleCloseBloco} >
                <CancelIcon sx={{ color: '#444444' }}  />
              </IconButton>
            </Grid>

          </Grid>
        </Box>



        <Box sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ marginRight: '11px' }}>
            <Grid item xs={6}>
              <Typography sx={{fontSize: '15px'}}>Qtde</Typography>
              <Typography sx={{fontSize: '13px'}} variant="body1">100k</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{fontSize: '15px'}}>Compra</Typography>
              <Typography sx={{fontSize: '13px'}}>{price}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginLeft: '11px' }}>
            <Grid item xs={6}>
              <Typography sx={{fontSize: '15px'}}>Venda</Typography>
              <Typography sx={{fontSize: '13px'}}>{price}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{fontSize: '15px'}}>Qtde</Typography>
              <Typography sx={{fontSize: '13px'}}>100k</Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2} sx={{ marginTop: 2 }}>

          <Grid item xs={4}>

            <Typography sx={{fontSize: '15px'}}>Stop Loss</Typography>

            <TextField  variant="outlined" type="number"
            
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            size="small"
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
            }}/>
          </Grid>

          <Grid item xs={4}>
            <Typography sx={{fontSize: '15px'}}>Qtde</Typography>

            <TextField  variant="outlined" type="number"
            
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            size="small"
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
            }}/>

            
          </Grid>

          <Grid item xs={4}>

            <Typography sx={{fontSize: '15px'}}>Gain</Typography>

            <TextField  variant="outlined" type="number"
            
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            size="small"
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
            }}/>
          </Grid>

        </Grid>

        <Grid container spacing={2} sx={{ marginTop: -1 }}>
          <Grid item xs={4}>
            <Button variant="contained" color="secondary" size="small" fullWidth sx={{backgroundColor: "#dc3545"}}>
              Vender
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" size="small" fullWidth sx={{backgroundColor: "#27a746"}}>
              Fechar
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="success" size="small" fullWidth sx={{backgroundColor: "#007bff"}}>
              Compra
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
    </Draggable>
  );
};

export default BlocoDeNegociacao;
