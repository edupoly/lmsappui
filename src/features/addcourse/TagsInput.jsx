import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';

function TagsInput({ name }) {
    return (
        <div className="mb-3">
            <label className="form-label">Cohort Tags</label>
            <FieldArray name={name}>
                {({ push, remove, form }) => (
                    <div>
                        {form.values[name].map((_, index) => (
                            <div key={index} className="input-group mb-2">
                                <Field name={`${name}[${index}]`} className="form-control" />
                                <button 
                                    type="button" 
                                    onClick={() => remove(index)} 
                                    className="btn btn-outline-danger ms-2"
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                                <ErrorMessage name={`${name}[${index}]`} component="div" className="text-danger ms-2" />
                            </div>
                        ))}
                        <button 
                            type="button" 
                            onClick={() => push('')} 
                            className="btn btn-outline-primary"
                        >
                            Add Tag
                        </button>
                    </div>
                )}
            </FieldArray>
        </div>
    );
}

export default TagsInput;
