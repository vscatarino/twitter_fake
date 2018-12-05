import {UPDATE_USER_NAME, UPDATE_USER_PHOTO, UPDATE_USER_COVER, UPDATE_TWEET_LIST } from '../actions/actionTypes';

const initialState = {
    name:'carregando...',
    photo:'',
    cover:'',
    tweet_list:[]
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

        case UPDATE_TWEET_LIST:
            return{
                ...state,
                tweet_list:action.payload
            }

        default:
            return state;
    }
};