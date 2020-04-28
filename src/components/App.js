import React from 'react';
import Switch from "react-router/Switch";
import {Route} from "react-router";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "./BlogPostListContainer";

class App extends React.Component {


    render() {
        return (<div>
            <header>
                <h2>HELLO!</h2>
            </header>
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/" component={BlogPostListContainer} />
            </Switch>
        </div>);
    }
}

export default App;
