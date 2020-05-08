import {combineReducers} from "redux";
import blogPostList from "./reducer/BlogPostList";
import blogPost from "./reducer/blogPost";
import { reducer as formReducer } from 'redux-form';
import auth from "./reducer/auth";


export default combineReducers({
        blogPostList,
        blogPost,
        auth,
        form: formReducer
});
