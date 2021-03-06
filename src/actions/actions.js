import {requests} from "../agent";
import {
    BLOG_POST_ERROR,
    BLOG_POST_LIST_ADD,
    BLOG_POST_LIST_ERROR,
    BLOG_POST_LIST_RECEIVED,
    BLOG_POST_LIST_REQUEST,
    BLOG_POST_RECEIVED,
    BLOG_POST_REQUEST,
    BLOG_POST_UNLOAD, USER_LOGIN_FAILED, USER_LOGIN_HAS_TOKEN, USER_LOGIN_LOGOUT, USER_LOGIN_SUCCESS
} from "./constants";



export const blogPostListRequest = () => ({
    type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListError = (error) => ({
    type: BLOG_POST_LIST_ERROR,
    error
});

export const blogPostListReceived = (data) => ({
    type: BLOG_POST_LIST_RECEIVED,
    data
});

export const blogPostRequest = () => ({
    type: BLOG_POST_REQUEST,
});

export const blogPostError = (error) => ({
    type: BLOG_POST_ERROR,
    error
});

export const blogPostUnload = () => ({
    type: BLOG_POST_UNLOAD
});

export const blogPostReceived = (data) => ({
    type: BLOG_POST_RECEIVED,
    data
});


export const blogPostListFetch = () => {
    return (dispatch) => {
        dispatch(blogPostListRequest());
        return requests.get('/blog_posts')
            .then(response => dispatch(blogPostListReceived(response)))
            .catch(error => dispatch(blogPostListError(error)));
    }
};

export const blogPostFetch = (id) => {
    return (dispatch) => {
        dispatch(blogPostRequest());
        return requests.get(`/blog_posts/${id}`)
            .then(response => dispatch(blogPostReceived(response)))
            .catch(error => dispatch(blogPostError(error)));
    }
};

export const userLoginSuccess = (token, userId) => {
    return {
        type: USER_LOGIN_SUCCESS,
        token,
        userId
    };
};

export const userLoginError = (error) => {
    return {
        type: USER_LOGIN_FAILED,
        error
    };
};

export const userLoginLogout = () => {
    return {
        type: USER_LOGIN_LOGOUT
    };
}

export const userLoginHasToken = (token) => {
    return {
        type: USER_LOGIN_HAS_TOKEN,
        token
    };
}

export const userLoginAttempt = (username, password) => {
    return (dispatch) => {
        return requests.post('/login_check', { username, password })
            .then(r => dispatch(userLoginSuccess(r.token, r.id)))
            .catch(err => dispatch(userLoginError(err)));
    }
};

export const userLoginLogoutAttempt = () => dispatch => {
    requests.setToken(null);
    window.localStorage.removeItem('jwtToken');
    return dispatch(userLoginLogout());
};

export const userLoginHasTokenAttempt = (token) => dispatch => {
    requests.setToken(token);
    dispatch(userLoginHasToken(token));
};

export const blogPostAdd = () => ({
    type: BLOG_POST_LIST_ADD,
    data: {
        id: Math.floor(Math.random() * 100 + 3),
        title: 'New Blog Post'
    }
});

