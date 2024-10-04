// src/componentes/Home/Home.js

import React from 'react';
import Grafico from '../grafico/grafico';
import BlocoDeNegociacao from '../BlocoDeNegociacao/BlocoDeNegociacao'

const stockData = {
  stockName: 'AAPL',
  buyQuantity: 10,
  sellQuantity: 5,
  buyPrice: 150.00,
  sellPrice: 155.00
};

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Grafico />
      <BlocoDeNegociacao/>
      
    </div>
  );
}

export default Home;
