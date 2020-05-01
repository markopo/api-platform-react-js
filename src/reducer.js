import {combineReducers} from "redux";
import blogPostList from "./reducer/BlogPostList";
import blogPost from "./reducer/blogPost";


export default combineReducers({
        blogPostList,
        blogPost
});
