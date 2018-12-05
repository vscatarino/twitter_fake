import {API, API_FAILURE, API_SUCCESS} from "./actionTypes";
import axios from "axios";

export const fetchedApi= data => ({
    type:API_SUCCESS,
    payload: data
})

export const fetchExceptionApi = error => ({
    type:API_FAILURE,
    payload: error
})

export function fetchActiveApi(){
    return function action(dispatch){
        dispatch({type:API})

        const request = axios({
            method: 'GET',
            url: 'https://private-b93cbf-twitterfake.apiary-mock.com/questions',
            headers:[]
        });

        return request.then(
            response => dispatch(fetchedApi(response)),
            err => dispatch(fetchExceptionApi(err))
        )
    }
}