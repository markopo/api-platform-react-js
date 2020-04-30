import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {


    render() {
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand" >Start</Link>
                    <Link to="/login" className="navbar-text" >Login</Link>
                </nav>);
    }
}

export default Header;
