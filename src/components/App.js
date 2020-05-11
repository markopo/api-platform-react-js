import React from 'react';
import Switch from "react-router/Switch";
import {Route} from "react-router";
import BlogPostListContainer from "./BlogPostListContainer";
import Header from "./Header";
import BlogPostContainer from "./BlogPostContainer";
import LoginPage from "./LoginPage";
import {requests} from "../agent";
import { connect } from "react-redux";
import {userLoginHasTokenAttempt, userLoginLogoutAttempt} from "../actions/actions";

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = ({
    userLoginLogoutAttempt,
    userLoginHasTokenAttempt
});

class App extends React.Component {

    constructor(props) {
        super(props);

        this.logOut = this.logOut.bind(this);
    }

    componentDidMount() {
        const token = window.localStorage.getItem('jwtToken');

        if (token) {
           this.props.userLoginHasTokenAttempt(token);
        }

    }

    logOut() {
        console.log('APP LOGOUT!');
        this.props.userLoginLogoutAttempt();
    }

    render() {

        const { isAuthenticated } = this.props;

        console.log('APP: ', isAuthenticated, this.props);

        return (<div>
                    <Header isAuthenticated={isAuthenticated} logOut={() => this.logOut()} />
                    <Switch>
                        <Route path="/blog-post/:id/:slug" component={BlogPostContainer} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/" component={BlogPostListContainer} />
                    </Switch>
               </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
