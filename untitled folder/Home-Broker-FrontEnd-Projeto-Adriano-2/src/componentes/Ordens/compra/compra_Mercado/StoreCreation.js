import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import compraMercadoReducer from "./compraMercadoReducer"; // Certifique-se de que o caminho está correto

// Combine os reducers necessários
const rootReducer = combineReducers({
  compraMercadoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Criação da store com o middleware redux-thunk
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const GlobalContext = React.createContext();
export const StorePrincipalContext = React.createContext();

export default store;
