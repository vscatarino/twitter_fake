import { UPDATE_USER_NAME, UPDATE_USER_PHOTO, UPDATE_USER_COVER, UPDATE_TWEET_LIST  } from './actionTypes';

export const update_user_name = name =>({
            type: UPDATE_USER_NAME,
            payload: name
});

export const update_user_photo = url_photo =>({
            type: UPDATE_USER_PHOTO,
            payload: url_photo
});

export const update_user_cover = url_cover =>({
            type: UPDATE_USER_COVER,
            payload: url_cover
});

export const update_tweet_list = list =>({
        type:UPDATE_TWEET_LIST,
        payload: list,
})