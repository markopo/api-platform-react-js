import {
    BLOG_POST_REQUEST,
    BLOG_POST_RECEIVED,
    BLOG_POST_ERROR
} from "../actions/constants";

export default (state = {
    post: null,
    isFetching: false
}, action) => {
    console.log('reducer: ', state, action);

    switch (action.type) {

        case BLOG_POST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case BLOG_POST_RECEIVED:
            return {
                ...state,
                post: action.data,
                isFetching: false
            };
        case BLOG_POST_ERROR:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;

    }


}
