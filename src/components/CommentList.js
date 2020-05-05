import React from 'react';
import timeago from 'timeago.js';
import Author from "./Author";

class CommentList extends React.Component {


    renderComment(comment) {
        const {
            id,
            content,
            published,
            author
        } = comment;

        const key = `comment_${id}`;

        const timeAgoStr = timeago().format(published);

        return (<li className="list-group-item" key={key}>
                    <i className="text-muted">Published: {timeAgoStr}</i><br />
                    <Author author={author} />
                    <span>{content}</span>
                </li>);
    }

    render() {

        const {
            commentList,
            isFetching
        } = this.props;

        if (isFetching) {
            return (<div> </div>);
        }

        return (<div className="card mb-3 mt-3 shadow-sm">
                    <div className="card-body">
                        <h5>Comments</h5>
                        <ul className="list-group">
                        {commentList && commentList.map(comment => (this.renderComment(comment)))}
                        </ul>
                    </div>
                </div>);
    }
}

export default CommentList;