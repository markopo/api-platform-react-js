import React from 'react';


class Alert extends React.Component {

    render() {
        const {  isFetching  } = this.props;
        const cssDisplayFetching = isFetching ? 'block' : 'none';

        return (
            <div style={{ 'display': cssDisplayFetching }} className="alert alert-primary" >
                <span>{ isFetching ? 'Fetching data..' : '' }</span>
            </div>
        );
    }
}

export default Alert;
