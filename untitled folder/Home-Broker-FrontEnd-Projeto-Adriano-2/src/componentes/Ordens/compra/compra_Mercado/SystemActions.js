import axios from "axios";
import { MUDAR_DADOS_LOGIN } from "./ActionTypes"; // Certifique-se que ActionTypes está no caminho correto

// Função para mudar os dados de login, se isso for necessário no `CompraMercado.js`
export const mudarDadosLoginAction = (nomeVariavel, valor) => {
  return (dispatch) => {
    dispatch({
      type: MUDAR_DADOS_LOGIN,
      payload: { nomeVariavel: nomeVariavel, valor: valor },
    });
  };
};

// Função para realizar login, se o `CompraMercado.js` precisar de autenticação
export const logarUsuarioAction = (email, senha) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/login', { email, senha });
      
      if (response.data) {
        const { token, user } = response.data;
        
        // Aqui você pode despachar ações que atualizam o estado global com os dados do usuário
        dispatch({
          type: "SET_USER_TOKEN",
          payload: { token, user },
        });

        // Navegar para a página inicial ou outra página após o login
        // Se estiver usando react-router, por exemplo, use history.push('/home');
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  };
};

// Outras ações necessárias para o funcionamento do `CompraMercado.js` podem ser adicionadas aqui

