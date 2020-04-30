import React from 'react';


class Alert extends React.Component {

    render() {
        const {  show, text  } = this.props;
        const cssDisplayShow = show ? 'block' : 'none';

        return (
            <div style={{ 'display': cssDisplayShow }} className="alert alert-primary" >
                <span>{ show ? text : '' }</span>
            </div>
        );
    }
}

export default Alert;
