import React from 'react';
import {blogPostFetch} from "../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state.blogPost
});

const mapDispatchToProps = {
    blogPostFetch
}

class BlogPostContainer extends React.Component {

    componentDidMount() {
        console.log('bpc: ', this.props, this.props.match.params.id);

        const { id } = this.props.match.params;

        this.props.blogPostFetch(id);
    }

    render() {

        const {
            post
        } = this.props;

        if(!post) {
            return (<div>No post</div>);
        }

        console.log('post: ', post);

        return(<div>
            Hello BlogPostContainer {post.title}
        </div>);
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);
