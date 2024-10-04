import React, { useState } from 'react';
import Draggable from 'react-draggable';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton, Box, Typography, Divider, TextField, Checkbox, Button } from '@mui/material';

function Compra() {
  const [isClosed, setIsClosed] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  if (isClosed) {
    return null;
  }

  return (
    <Draggable>
      <Box
        sx={{
          border: '3px solid #4b494c',
          borderRadius: '20px',
          overflow: 'hidden',
          backgroundColor: '#000',
          width: '60%',
        }}
      >
        <Box sx={{ backgroundColor: '#000', borderRadius: '20px 20px 0 0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '2px', position: 'relative' }}>
            <Typography
              sx={{ fontSize: '19px', fontWeight: 500, color: '#fff', flexGrow: 1, textAlign: 'center' }}
            >
              COMPRA
            </Typography>

            <Box sx={{ position: 'absolute', right: 0 }}>
              <IconButton onClick={() => setIsClosed(true)}>
                <CancelIcon sx={{ color: '#444444' }} />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ backgroundColor: '#4A494C', marginY: '1px', height: '1px' }} />
        </Box>

        <Box sx={{ height: 350, width: '100%', marginTop: '0px', display: 'flex' }}>
          {/* Primeira Coluna */}
          <Box sx={{ width: '50%', padding: '10px' }}>
            {/* Ativo e Qtde */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Box sx={{ width: '48%', display: 'flex', paddingBottom: '60px' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff', }}>Ativo</Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '97px',
                      padding: 0, // Remove padding to fit the height exactly
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
              </Box>
              <Box sx={{ width: '48%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>Qtde</Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '97px',
                      padding: 0, // Remove padding to fit the height exactly
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
              </Box>
            </Box>

            {/* Disparo e Execução */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Box sx={{ width: '48%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>Disparo</Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '97px',
                      padding: 0, // Remove padding to fit the height exactly
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
              </Box>
              <Box sx={{ width: '48%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>Execução</Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '97px',
                      padding: 0, // Remove padding to fit the height exactly
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
              </Box>
            </Box>

            {/* Disparo e Execução - Segundo Par */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Box sx={{ width: '48%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>Disparo</Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '97px',
                      padding: 0, // Remove padding to fit the height exactly
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
              </Box>
              <Box sx={{ width: '48%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>Execução</Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '97px',
                      padding: 0, // Remove padding to fit the height exactly
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
              </Box>
            </Box>

            <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>Validade</Typography>
            <TextField
              variant="outlined"
              select
              size="small"
              fullWidth
              InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '97px',
                      padding: 0, // Remove padding to fit the height exactly
                    },
                    sx: {
                      marginBottom: '10px', height: '17px', width: '97px' 
                    },
                  }}
              SelectProps={{
                native: true,
              }}
            >
              <option>Hoje</option>
              <option>Ate o dia</option>
              <option>Ate cancelar</option>
            </TextField>

            <Divider sx={{ backgroundColor: '#4A494C', marginY: '1px', height: '1px' }} />

            <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>Assinatura eletrônica</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
               InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '180px',
                      padding: 0, // Remove padding to fit the height exactly
                    },
                    sx: {
                      marginBottom: '10px', height: '17px', width: '97px' 
                    },
                  }}
              sx={{
                marginBottom: '10px',
                height: '17px',
                width: '160px',
                '.MuiOutlinedInput-root': {
                  paddingRight: 0, // Adjust padding to fit the specified height
                },
              }}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Checkbox checked={checked} onChange={handleCheckboxChange} />
              <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>
                Confirmo a assinatura eletrônica
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained">Limpar</Button>
              <Button variant="contained" color="primary">Compra</Button>
            </Box>
          </Box>

          {/* Divider vertical */}
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#4A494C', marginX: '1px' }} />

          {/* Segunda Coluna */}
          <Box sx={{ width: '50%', padding: '10px', display: 'flex', flexDirection: 'column' }}>
            {/* Cotação Atual */}
            <Box sx={{ marginBottom: '10px', display: 'flex', justifyContent: 'flex-start' }}>
              <Box sx={{ width: '50%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>
                  Cotação Atual
                </Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: {
                      color: '#000',
                      backgroundColor: '#bbbbbb',
                      height: '17px',
                      width: '97px',
                      padding: 0,
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
              </Box>
            </Box>

            {/* GAIN */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Box sx={{ width: '48%',  }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>GAIN</Typography>
                <Box sx={{ marginTop: '5px' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#fff' }}>Disparo</Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    InputProps={{
                      style: {
                        color: '#000',
                        backgroundColor: '#bbbbbb',
                        height: '17px',
                        width: '97px',
                        padding: 0,
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
                </Box>
                <Box sx={{ marginTop: '5px' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#fff' }}>Execução</Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    InputProps={{
                      style: {
                        color: '#000',
                        backgroundColor: '#bbbbbb',
                        height: '17px',
                        width: '97px',
                        padding: 0,
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
                </Box>
              </Box>
              <Box sx={{ width: '48%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>STOP</Typography>
                <Box sx={{ marginTop: '5px' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#fff' }}>Disparo</Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    InputProps={{
                      style: {
                        color: '#000',
                        backgroundColor: '#bbbbbb',
                        height: '17px',
                        width: '97px',
                        padding: 0,
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
                </Box>
                <Box sx={{ marginTop: '5px' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#fff' }}>Execução</Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    InputProps={{
                      style: {
                        color: '#000',
                        backgroundColor: '#bbbbbb',
                        height: '17px',
                        width: '97px',
                        padding: 0,
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
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Draggable>
  );
}

export default Compra;
