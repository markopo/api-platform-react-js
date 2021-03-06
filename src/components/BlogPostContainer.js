import React from 'react';
import {blogPostFetch, blogPostUnload} from "../actions/actions";
import {connect} from "react-redux";
import BlogPost from "./BlogPost";
import CommentList from "./CommentList";


const mapStateToProps = state => ({
    ...state.blogPost
});

const mapDispatchToProps = {
    blogPostFetch,
    blogPostUnload
}

class BlogPostContainer extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.blogPostFetch(id);
    }

    componentWillUnmount() {
        this.props.blogPostUnload();
    }

    render() {
        const {
            post,
            isFetching
        } = this.props;

        console.log('post: ', post);

        const comments = post ? post.comments : [];

        return(<div>
                 <BlogPost post={post} isFetching={isFetching} />
                 <CommentList commentList={comments} isFetching={isFetching} />
                </div>);
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);
