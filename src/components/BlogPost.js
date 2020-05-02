import React from 'react';
import Alert from "./Alert";

class BlogPost extends React.Component{


    render() {
        const {
            post,
            isFetching
        } = this.props;


        if (!post) {
            return (<Alert show={isFetching} text="Fetching post.. Hold on!" />);
        }

        console.log('post: ', post);

        return (
            <div>
                <h3>{post.title}</h3>
                <p>Published: {post.published}</p>
                <p>{post.text}</p>
            </div>
        );
    }
}

export default BlogPost;
