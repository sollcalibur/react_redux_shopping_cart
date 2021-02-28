import { combineReducers } from 'redux';
import shoppingCartReducer from './shoppingCartReducers';

const allReducers = combineReducers({
    shoppingCartReducer: shoppingCartReducer,
})

export default allReducers;