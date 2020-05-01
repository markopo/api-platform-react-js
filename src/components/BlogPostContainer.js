import React from 'react';

class BlogPostContainer extends React.Component {

    componentDidMount() {
        console.log('bpc: ', this.props, this.props.match.params.id);
    }

    render() {
        return(<div>
            Hello BlogPostContainer
        </div>);
    }
}


export default BlogPostContainer;
