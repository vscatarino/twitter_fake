import { combineReducers } from 'redux';
import {local_state_reducer} from "./local_state_reducer";

export const Reducers = combineReducers({
    localState:local_state_reducer
})