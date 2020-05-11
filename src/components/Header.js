import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.clickLogOut = this.clickLogOut.bind(this);
    }

    clickLogOut() {
        console.log('logout');
        this.props.logOut();
    }

    render() {
        const { isAuthenticated } = this.props;

        return (<header>
                    <h2>
                        <span>React Blog</span>
                        { isAuthenticated ?  <button className="btn btn-sm" onClick={() => this.clickLogOut()} >Log out</button> : <span>&nbsp;</span> }
                    </h2>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand" >Start</Link>
                        { isAuthenticated ? <span>Logged in</span> : <Link to="/login" className="navbar-text" >Login</Link> }
                    </nav>
                    <hr />
                </header>);
    }
}

export default Header;
