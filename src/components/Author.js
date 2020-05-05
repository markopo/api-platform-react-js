import React from 'react';

export default class Author extends React.Component  {


    render() {

        const {
            author
        } = this.props;

        if (!author) {
            return (<div></div>);
        }

        return (<div className="text-muted"><i>Author: {author.fullName} ({author.username}) </i></div>)
    }
}
