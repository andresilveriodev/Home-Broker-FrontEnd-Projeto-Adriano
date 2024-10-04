import React, { useState } from 'react';
import Draggable from 'react-draggable';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid, IconButton, Box, Typography, Divider } from '@mui/material';

function Venda() {
  const [isClosed, setIsClosed] = useState(false);

  // Fechar o componente se o estado isClosed for verdadeiro
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
        <div>
          <Box sx={{ backgroundColor: '#000', borderRadius: '20px 20px 0 0' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: '2px',
                position: 'relative',
              }}
            >
              {/* Título centralizado */}
              <Typography
                sx={{
                  fontSize: '19px',
                  fontWeight: 500,
                  color: '#fff',
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                VENDA
              </Typography>
              
              {/* Botão de fechar à direita */}
              <Grid sx={{ position: 'absolute', right: 0 }}>
                <IconButton onClick={() => setIsClosed(true)}>
                  <CancelIcon sx={{ color: '#444444' }} />
                </IconButton>
              </Grid>
            </Box>

            <Divider sx={{ backgroundColor: '#4A494C', marginY: '1px', height: '1px' }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '10px' }}>
              {/* Aqui você pode adicionar outros elementos, como campos de formulário, botões, etc. */}
            </Box>

          </Box>

          {/* Área principal, onde você pode adicionar conteúdo adicional */}
          <div style={{ height: 350, width: '100%', marginTop: '0px' }}>
            {/* Conteúdo adicional pode ser adicionado aqui */}
          </div>
        </div>
      </Box>
    </Draggable>
  );
}

export default Venda;
