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

        let index = 0;

        const timer = setInterval(() => {
            this.props.blogPostAdd();
            index += 1;

            if(index > 5) {
                clearInterval(timer);
            }
        }, 2000);

        this.props.blogPostList();

    }

    render() {
        const { posts } = this.props;

        return (<div>
           <div>
               BlogPostListContainer
           </div>
           <BlogPostList posts={posts} />
        </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);
