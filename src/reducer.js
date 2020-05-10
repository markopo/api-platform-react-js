import {combineReducers} from "redux";
import blogPostList from "./reducer/BlogPostList";
import blogPost from "./reducer/blogPost";
import { reducer as formReducer } from 'redux-form';
import auth from "./reducer/auth";
import {routerReducer} from "react-router-redux";


export default combineReducers({
        blogPostList,
        blogPost,
        auth,
        router: routerReducer,
        form: formReducer
});
