import React, { useState } from 'react';
<<<<<<< HEAD
import { AppBar, Toolbar, Box, Button, ListItem, ListItemButton, ListItemIcon, List, ListItemText, Typography } from '@mui/material';
=======
import { AppBar, Toolbar, Box, Button, ListItem, ListItemButton, ListItemIcon, List, ListItemText } from '@mui/material';
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from './componentes/Home/Home';
import MatrizDeOpcoes from './componentes/MatrizDeOpcoes/MatrizDeOpcoes';
<<<<<<< HEAD
import Historico from './componentes/Historico/Historico';
import Grafico from './componentes/grafico/grafico';
=======
import GestaoDeCarteira from './componentes/GestaoDeCarteira/GestaoDeCarteira';
import Historico from './componentes/Historico/Historico';
import CompraMercado from './componentes/Ordens/compra/compra_Mercado/CompraMercado';
import Grafico from './componentes/grafico/grafico'
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
import ListagemDeOpcao from './componentes/ListagemDeOpcao/ListagemDeOpcao';
import BlocoDeNegociacao from './componentes/BlocoDeNegociacao/BlocoDeNegociacao';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
<<<<<<< HEAD
import Compra from './componentes/Boletas/Compra/Compra';
import Venda from './componentes/Boletas/Venda/Venda';
=======
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
import Secured from './Secured';
import './App.css';

function App() {
  const [blocosDeNegociacao, setBlocosDeNegociacao] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [grafico, setGrafico] = useState([]);
  const [listagemDeOpcao, setListagemDeOpcao] = useState([]);
<<<<<<< HEAD
  const [showBar, setShowBar] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleBookClick = () => {
    setBlocosDeNegociacao([...blocosDeNegociacao, <BlocoDeNegociacao key={blocosDeNegociacao.length} />]);
  };

  const handleHistoryClick = () => {
=======

  const handleBookClick = () => {
    // Adiciona um novo BlocoDeNegociacao ao array
    setBlocosDeNegociacao([...blocosDeNegociacao, <BlocoDeNegociacao key={blocosDeNegociacao.length} />]);
    
  };

  const handleHistoryClick = () => {
    // Adiciona um novo Historico ao array
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
    setHistorico([...historico, <Historico key={historico.length} />]);
  };

  const handleGraficoClick = () => {
<<<<<<< HEAD
=======
    // Adiciona um novo Historico ao array
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
    setGrafico([...grafico, <Grafico key={grafico.length} />]);
  };

  const handleListagemDeOpcaoClick = () => {
<<<<<<< HEAD
    setListagemDeOpcao([...listagemDeOpcao, <ListagemDeOpcao key={listagemDeOpcao.length} />]);
  };

  const handleCompraClick = () => {
    setActiveComponent(<Compra />); // Define o componente ativo como Compra
  };

  const handleVendaClick = () => {
    setActiveComponent(<Venda />); // Define o componente ativo como Venda
  };
=======
    // Adiciona um novo Historico ao array
    setListagemDeOpcao([...listagemDeOpcao, <ListagemDeOpcao key={listagemDeOpcao.length} />]);
  };

>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74

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
<<<<<<< HEAD
      <Box sx={{ width: '80px', backgroundColor: '#2c2c2c', color: '#d2d5d2', paddingTop: '90px', position: 'fixed', height: '100vh', top: 0, left: 0, zIndex: 1000 }}>
        <List>
          <ListItem disablePadding>
=======
      <Box sx={{ width: '80px', backgroundColor: '#2c2c2c', color: '#d2d5d2', paddingTop: '90px', position: 'fixed', height: '100vh', top: 0, left: 0, height: '100vh', zIndex: 1000 }}>
        
        <List>

          <ListItem disablePadding>

>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }} onClick={handleBookClick}>
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <CollectionsBookmarkIcon sx={{ color: '#92a4c0', fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText 
                primary="BOOK" 
                primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }}
              />
            </ListItemButton>
<<<<<<< HEAD
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton 
              sx={{ flexDirection: 'column', alignItems: 'center', position: 'relative' }} 
              onMouseEnter={() => setShowBar(true)} 
              onMouseLeave={() => setShowBar(false)}
            >
=======

          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }}>
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <ShoppingCartIcon sx={{ color: '#92a4c0' }} />
              </ListItemIcon>
              <ListItemText primary="ORDENS" primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }} />
<<<<<<< HEAD

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
=======
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
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
<<<<<<< HEAD
=======
            <ListItemButton sx={{ flexDirection: 'column', alignItems: 'center' }} component={Link} to="/gestao-de-carteira">
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <InboxIcon sx={{ color: '#92a4c0' }} />
              </ListItemIcon>
              <ListItemText primary="GESTÃO DE CARTEIRA" primaryTypographyProps={{ fontSize: '12px', textAlign: 'center', color: '#92a4c0' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
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
<<<<<<< HEAD
        </List>
=======

        </List>

>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
      </Box>

      {/* Conteúdo principal */}
      <Box sx={{ paddingTop: '90px', paddingLeft: '260px', width: '100%' }}>
        <Routes>
<<<<<<< HEAD
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
=======
          { /*<Route path='' element={<Secured/>} />*/ } 
          <Route path="/" element={<Home />} />
          <Route path="/matriz-opcoes" element={<MatrizDeOpcoes />} />
          <Route path="/gestao-de-carteira" element={<GestaoDeCarteira />} />
          <Route path="/compra-a-mercado" element={<CompraMercado />} />
        </Routes>

        {/* Renderiza todos os BlocoDeNegociacao adicionados */}
        {blocosDeNegociacao.map((bloco) => bloco)}
        {historico.map((bloco) => bloco)}
        {grafico.map((bloco) => bloco)}
        {listagemDeOpcao.map((bloco) => bloco)}
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
      </Box>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
