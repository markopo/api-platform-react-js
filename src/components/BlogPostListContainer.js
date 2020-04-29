import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostList} from "../actions/actions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostList,
    blogPostAdd
};

class BlogPostListContainer extends React.Component {

    componentDidMount() {
        console.log('mount', this.props);
        this.props.blogPostList();
    }

    render() {
        const { posts } = this.props;

        console.log('posts: ', posts);

        return (<div>
           <div>
               BlogPostListContainer
           </div>
           <BlogPostList posts={posts} />
        </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);
