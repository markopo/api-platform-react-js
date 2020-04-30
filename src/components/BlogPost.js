import React from 'react';
import timeago from 'timeago.js';

class BlogPost extends React.Component {

    render() {
        const { post } = this.props;

        const timeAgoStr = timeago().format(post.published);

        return (<div className="card mb-3 mt-3 shadow-sm" key={post.id} >
                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <p className="card-text border-top">
                            <small className="text-muted">
                               Published: {timeAgoStr}
                            </small>
                        </p>
                    </div>
                </div>);
    }
}

export default BlogPost;
