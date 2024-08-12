import React from 'react';
import { Field, ErrorMessage } from 'formik';

function TextInput({ name, label }) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <Field type="text" name={name} className="form-control" />
            <ErrorMessage name={name} component="div" className="text-danger" />
        </div>
    );
}

export default TextInput;
