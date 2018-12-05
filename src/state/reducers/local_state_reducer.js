import {UPDATE_USER_NAME, UPDATE_USER_PHOTO, UPDATE_USER_COVER } from '../actions/actionTypes';

const initialState = {
    name:'JULIANA CASTANHA',
    photo:'https://i.pinimg.com/originals/ae/19/04/ae1904b8ec612779a45d5d2b091140ea.jpg',
    cover:''
}

export const local_state_reducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_USER_NAME:
            return{
                ...state,
                name: action.payload
            }

        case UPDATE_USER_PHOTO:
            return{
                ...state,
                photo: action.payload
            }

        case UPDATE_USER_COVER:
            return{
                ...state,
                cover: action.payload
            }

        default:
            return state;
    }
};