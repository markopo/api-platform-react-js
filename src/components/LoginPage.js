import React from 'react';
import LoginForm from "./LoginForm";


export default class LoginPage extends React.Component {


    constructor(props) {
        super(props);

        console.log('loginpage: ', this.props);
    }

    render() {

        const { history } = this.props;

        return (<div>
                    <h2>Login</h2>
                    <LoginForm history={history} />
                </div>);
    }
}