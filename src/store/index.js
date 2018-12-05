import {createStore, applyMiddleware} from 'redux';
import {Reducers} from "../state/reducers";
import thunk from 'redux-thunk';

export const Store = createStore(Reducers, applyMiddleware(thunk))