import React from 'react';
import Switch from "react-router/Switch";
import {Route} from "react-router";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "./BlogPostListContainer";
import Header from "./Header";
import BlogPostContainer from "./BlogPostContainer";

class App extends React.Component {


    render() {
        return (<div>
            <header>
                <h2>React Blog</h2>
            </header>
            <Header />
            <hr/>
            <Switch>
                <Route path="/blog-post/:id/:slug" component={BlogPostContainer} />
                <Route path="/login" component={LoginForm} />
                <Route path="/" component={BlogPostListContainer} />
            </Switch>
        </div>);
    }
}

export default App;
