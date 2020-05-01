import {
    BLOG_POST_LIST_ADD,
    BLOG_POST_LIST_REQUEST,
    BLOG_POST_LIST_RECEIVED,
    BLOG_POST_LIST_ERROR } from "../actions/constants";


export default (state = {}, action) => {

    switch (action.type) {
        case BLOG_POST_LIST_REQUEST:
            return {
                ...state,
                isFetching: true,
                posts: []
            };
        case BLOG_POST_LIST_RECEIVED:
            return {
                ...state,
                isFetching: false,
                posts: action.data['hydra:member']
            }
        case BLOG_POST_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                posts: null
            }
        case BLOG_POST_LIST_ADD:
            return {
                ...state,
                posts: state.posts ? state.posts.concat(action.data) : state.posts
            };
        default:
            return state;
    }
}
