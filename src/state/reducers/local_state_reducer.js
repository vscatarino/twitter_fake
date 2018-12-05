import {UPDATE_USER_NAME} from '../actions/actionTypes';

const initialState = {
    name:'JULIANA CASTANHA'
}

export const local_state_reducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_USER_NAME:
            return{
                ...state,
                name: action.payload
            }

        default:
            return state;
    }
};