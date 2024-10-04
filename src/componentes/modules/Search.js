import React, { useState, useEffect } from 'react';
import {  Box, Grid,  TextField, } from '@mui/material';

function Search(className) {

    const [stockName, setStockName] = useState('IBM'); // Valor padrão inicial
    const [price, setPrice] = useState('0.00');
    const [isClosed, setIsClosed] = useState(false);

    const handleInputChange = (event) => {
        setStockName(event.target.value);
      };
    
      useEffect(() => {
        if (stockName) {
          console.log(`Buscando dados para a ação: ${stockName}`);
        }
      }, [stockName]);


  return (
    <div className={className}>
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

                </Grid>
        </Box>
    </div>
  )
}

export default Search


