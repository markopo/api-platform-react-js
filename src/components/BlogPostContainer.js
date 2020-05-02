import React from 'react';
import {blogPostFetch, blogPostUnload} from "../actions/actions";
import {connect} from "react-redux";
import BlogPost from "./BlogPost";

const mapStateToProps = state => ({
    ...state.blogPost
});

const mapDispatchToProps = {
    blogPostFetch,
    blogPostUnload
}

class BlogPostContainer extends React.Component {

    componentDidMount() {
        console.log('bpc: ', this.props, this.props.match.params.id);

        const { id } = this.props.match.params;

        this.props.blogPostFetch(id);
    }

    componentWillUnmount() {
        console.log('unmount!');
        this.props.blogPostUnload();
    }

    render() {
        const {
            post,
            isFetching
        } = this.props;

        console.log('post: ', post);

        return(<BlogPost post={post} isFetching={isFetching} />);
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);
