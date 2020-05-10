import React from 'react';
import Switch from "react-router/Switch";
import {Route} from "react-router";
import BlogPostListContainer from "./BlogPostListContainer";
import Header from "./Header";
import BlogPostContainer from "./BlogPostContainer";
import LoginPage from "./LoginPage";
import {requests} from "../agent";

class App extends React.Component {

    constructor(props) {
        super(props);

        const token = window.localStorage.getItem('jwtToken');

        if (token) {
            requests.setToken(token);
        }

    }

    render() {
        return (<div>
            <header>
                <h2>React Blog</h2>
            </header>
            <Header />
            <hr/>
            <Switch>
                <Route path="/blog-post/:id/:slug" component={BlogPostContainer} />
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={BlogPostListContainer} />
            </Switch>
        </div>);
    }
}

export default App;
