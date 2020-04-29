import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostListFetch, blogPostListError } from "../actions/actions";
import { connect } from 'react-redux';

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

        return (<div>
           <div>
               BlogPostListContainer
           </div>
           <div>
              <p>{ isFetching ? 'Fetching data..' : '' }</p>
           </div>
           <BlogPostList posts={posts} />
        </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);
