import { combineReducers } from 'redux';
import { local_state_reducer } from "./local_state_reducer";
import { apiReducer } from "./api_reducer"

export const Reducers = combineReducers({
    localState:local_state_reducer,
    api:apiReducer
})