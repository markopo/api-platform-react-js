import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostListFetch, blogPostListError } from "../actions/actions";
import { connect } from 'react-redux';
import Header from "./Header";

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

        console.log('props: ', this.props);

        const cssDisplayFetching = isFetching ? 'block' : 'none';

        return (<div>
                   <div style={{ 'display': cssDisplayFetching }} className="alert alert-primary" >
                      <span>{ isFetching ? 'Fetching data..' : '' }</span>
                   </div>
                   <BlogPostList posts={posts} />
                </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);
