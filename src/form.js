import React from 'react';



export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {

    return (
        <div className="form-group" >
            <label>{label}</label>
            <input className="form-control" {...input} type={type} />
            <div className="text-danger" >
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
};