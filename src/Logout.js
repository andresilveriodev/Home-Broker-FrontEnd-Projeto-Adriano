import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ keycloak }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Primeiro, efetua o logout do Keycloak
    keycloak.logout().then(() => {
      // Redireciona para a página pública após o logout
      navigate('/public');  // Corrigido para usar a rota correta
    }).catch(err => {
      console.error('Logout failed:', err);
    });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
