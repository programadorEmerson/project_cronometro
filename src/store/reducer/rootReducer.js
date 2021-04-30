import { combineReducers } from 'redux';
import counterReducer from '../reducers/counter.reducer';

// Se tiver mais reducers insere abaixo
const rootReducer = combineReducers({ counterReducer });

export default rootReducer;
