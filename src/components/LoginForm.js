import React from 'react';
import {Field, reduxForm} from "redux-form";
import {renderField} from "../form";
import {connect} from "react-redux";
import {userLoginAttempt} from "../actions/actions";

const mapDispatchToProps = {
    userLoginAttempt
};

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;
const maxLength = value => value && value.length > 15 ? `Must be 15 characters or less` : undefined;
const minLength = value => value && value.length < 2 ? `Must be 2 characters or more` : undefined;

class LoginForm extends React.Component {

    onSubmit(values) {
       console.log('submit: ', values);
       return this.props.userLoginAttempt(values.username, values.password);
    }

    render() {
        const { handleSubmit } = this.props;

        return (<div>
                    <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                        <div className="form-group">
                            <Field name="username" label="Username"
                                   validate={[required, maxLength, minLength]}
                                   warn={alphaNumeric} type="text" component={renderField} />
                            <Field name="password" label="Password"
                                   validate={[required, maxLength, minLength]}
                                   warn={alphaNumeric} type="password" component={renderField} />
                            <button type="submit" className="btn btn-primary btn-block" >Log in</button>
                        </div>
                    </form>
                </div>);
    }
}

export default reduxForm({ form: 'loginForm' })(connect(null, mapDispatchToProps)(LoginForm));
