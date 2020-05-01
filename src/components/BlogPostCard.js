import React from 'react';
import timeago from 'timeago.js';
import {Link} from "react-router-dom";

class BlogPostCard extends React.Component {

    render() {
        const { post } = this.props;

        const timeAgoStr = timeago().format(post.published);

        return (<div className="card mb-3 mt-3 shadow-sm" >
                    <div className="card-body">
                        <h3>
                            <Link to={`blog-post/${post.id}/${post.slug}`} >{post.title}</Link>
                        </h3>
                        <p className="card-text border-top">
                            <small className="text-muted">
                               Published: {timeAgoStr}
                            </small>
                        </p>
                    </div>
                </div>);
    }
}

export default BlogPostCard;
