import React from 'react';
import Alert from "./Alert";
import timeago from 'timeago.js';
import Author from "./Author";

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

        const timeAgoStr = timeago().format(post.published);

        const author = post ? post.author : null;

        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <div className="text-muted"><i>Published: {timeAgoStr}</i></div>
                    <Author author={author} />
                    <div className="card-text">{post.text}</div>
                </div>
            </div>
        );
    }
}

export default BlogPost;
