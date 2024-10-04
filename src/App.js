import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, ListItem, ListItemButton, ListItemIcon, List, ListItemText, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from './componentes/Home/Home';
import MatrizDeOpcoes from './componentes/MatrizDeOpcoes/MatrizDeOpcoes';
import Historico from './componentes/Historico/Historico';
import Grafico from './componentes/grafico/grafico';
import ListagemDeOpcao from './componentes/ListagemDeOpcao/ListagemDeOpcao';
import BlocoDeNegociacao from './componentes/BlocoDeNegociacao/BlocoDeNegociacao';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Compra from './componentes/Boletas/Compra/Compra';
import Venda from './componentes/Boletas/Venda/Venda';
import Secured from './Secured';
import './App.css';

function App() {
  const [blocosDeNegociacao, setBlocosDeNegociacao] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [grafico, setGrafico] = useState([]);
  const [listagemDeOpcao, setListagemDeOpcao] = useState([]);
  const [showBar, setShowBar] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleBookClick = () => {
    setBlocosDeNegociacao([...blocosDeNegociacao, <BlocoDeNegociacao key={blocosDeNegociacao.length} />]);
  };

  const handleHistoryClick = () => {
    setHistorico([...historico, <Historico key={historico.length} />]);
  };

  const handleGraficoClick = () => {
    setGrafico([...grafico, <Grafico key={grafico.length} />]);
  };

  const handleListagemDeOpcaoClick = () => {
    setListagemDeOpcao([...listagemDeOpcao, <ListagemDeOpcao key={listagemDeOpcao.length} />]);
  };

  const handleCompraClick = () => {
    setActiveComponent(<Compra />); // Define o componente ativo como Compra
  };

  const handleVendaClick = () => {
    setActiveComponent(<Venda />); // Define o componente ativo como Venda
  };

  return (
    <div className='main' style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', display: 'flex' }}>
      <AppBar sx={{ backgroundColor: '#333333', position: 'fixed', width: '100%', zIndex: 1201 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Button component={Link} to="/" sx={{ color: '#d2d5d2' }}>
              <HomeIcon sx={{ color: '#d2d5d2' }} />Home
            </Button>
          </Box>
          <Box>
            <Button sx={{ color: '#fff' }}>BENDER Análises</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar fixa à esquerda */}
      <Box sx={{ width: '80px', backgroundColor: '#2c2c2c', color: '#d2d5d2', paddingTop: '90px', position: 'fixed', height: '100vh', top: 0, left: 0, zIndex: 1000 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }} onClick={handleBookClick}>
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <CollectionsBookmarkIcon sx={{ color: '#92a4c0', fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText 
                primary="BOOK" 
                primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton 
              sx={{ flexDirection: 'column', alignItems: 'center', position: 'relative' }} 
              onMouseEnter={() => setShowBar(true)} 
              onMouseLeave={() => setShowBar(false)}
            >
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <ShoppingCartIcon sx={{ color: '#92a4c0' }} />
              </ListItemIcon>
              <ListItemText primary="ORDENS" primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }} />

              {/* Barra que aparece ao passar o mouse */}
              {showBar && (
                <Box sx={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '100%', 
                  transform: 'translateY(-50%)', 
                  backgroundColor: '#444', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  zIndex: 1100,
                  whiteSpace: 'nowrap'
                }}>
                  <Typography variant="body2" sx={{ fontSize: '12px', cursor: 'pointer' }} onClick={handleCompraClick}>
                    Compra
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '12px', cursor: 'pointer' }} onClick={handleVendaClick}>
                    Venda
                  </Typography>
                </Box>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }} onClick={handleHistoryClick}>
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <InboxIcon sx={{ color: '#92a4c0' }} />
              </ListItemIcon>
              <ListItemText primary="HISTÓRICO" primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }} component={Link} to="/matriz-opcoes">
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <MailIcon sx={{ color: '#92a4c0' }} />
              </ListItemIcon>
              <ListItemText primary="MATRIZ DE OPÇÕES" primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }} onClick={handleGraficoClick}>
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <CandlestickChartIcon sx={{ color: '#92a4c0' }} />
              </ListItemIcon>
              <ListItemText primary="GRÁFICO" primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }} onClick={handleListagemDeOpcaoClick}>
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <QueryStatsIcon sx={{ color: '#92a4c0' }} />
              </ListItemIcon>
              <ListItemText primary="LISTAGEM DE OPÇÃO" primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      {/* Conteúdo principal */}
      <Box sx={{ paddingTop: '90px', paddingLeft: '260px', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matriz-opcoes" element={<MatrizDeOpcoes />} />
        </Routes>

        {/* Renderiza todos os BlocoDeNegociacao adicionados */}
        {blocosDeNegociacao}
        {historico}
        {grafico}
        {listagemDeOpcao}

        {/* Renderiza o componente ativo (Compra ou Venda) */}
        {activeComponent}
      </Box>
    </div>
  );
}

export default App;
