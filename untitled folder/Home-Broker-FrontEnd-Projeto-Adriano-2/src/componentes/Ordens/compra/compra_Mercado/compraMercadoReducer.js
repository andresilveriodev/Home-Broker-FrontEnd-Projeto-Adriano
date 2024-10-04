import { MUDAR_ATIVO } from "../ActionTypes"; // Importando a action type, certifique-se de que o caminho está correto

// Estado inicial do reducer
const INITIAL_STATE = {
  ativo: "", // Valor inicial para a propriedade 'ativo'
  // Outras propriedades do estado inicial podem ser adicionadas aqui
};

// Reducer para CompraMercado
const compraMercadoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MUDAR_ATIVO:
      return {
        ...state,
        ativo: action.payload,
      };
    // Adicione outros cases para lidar com diferentes actions

    default:
      return state; // Retorna o estado inalterado por padrão
  }
};

export default compraMercadoReducer;
