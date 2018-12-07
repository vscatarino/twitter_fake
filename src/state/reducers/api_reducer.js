import { API, API_FAILURE, API_SUCCESS} from '../actions/actionTypes'

const initialState = {
    user_data:{
        tweets:[]
    },
    isFetching: false,
    lastRespOk: false,
    error: false
}

export const apiReducer = (state = initialState, action) =>{
    switch (action.type){
        case API:
            return{
                ...state,
                state,
                isFetching: true,
                lastRespOk: false,
                error: false
            };
        case API_SUCCESS:
            return{
                ...state,
                user_data: {...action.payload.data},
                isFetching: false,
                lastRespOk: true,
                error: false
            }
        case API_FAILURE:
            return{
                ...state,
                state,
                isFetching: false,
                error:true
            }
        default:
            return state;
    }
}