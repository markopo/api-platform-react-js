import React from 'react';
import BlogPost from "./BlogPost";


class BlogPostList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { posts } = this.props;

        return (<div>
                {posts && posts.map(post => (<BlogPost post={post} />))}
                </div>);
    }
}

export default BlogPostList;
