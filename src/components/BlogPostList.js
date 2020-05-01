import React from 'react';
import BlogPostCard from "./BlogPostCard";


class BlogPostList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { posts } = this.props;

        return (<div>
                {posts && posts.map(post => (<BlogPostCard key={post.id} post={post} />))}
                </div>);
    }
}

export default BlogPostList;
