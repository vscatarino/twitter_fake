import { UPDATE_USER_NAME } from './actionTypes';

export const update_user_name = name =>({
            type: UPDATE_USER_NAME,
            payload: name
});