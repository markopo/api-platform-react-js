import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostListFetch, blogPostListError } from "../actions/actions";
import { connect } from 'react-redux';
import Alert from "./Alert";

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostAdd,
    blogPostListFetch,
    blogPostListError
};

class BlogPostListContainer extends React.Component {

    componentDidMount() {
        this.props.blogPostListFetch();
    }

    render() {
        const { posts, isFetching } = this.props;

        return (<div>
                   <Alert show={isFetching} text='Fetching data..' />
                   <BlogPostList posts={posts} />
                </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);
