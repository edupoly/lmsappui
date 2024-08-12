import React from 'react';
import { Field, ErrorMessage } from 'formik';

const MultiInput = ({ field, form, ...props }) => {
    const handleKeyDown = (event) => {
        const { value } = field;
        const { setFieldValue } = form;

        if (event.key === ',' || event.key === 'Enter') {
            event.preventDefault();
            const inputValue = event.target.value.trim();

            if (inputValue) {
                const newValues = [...value, inputValue];
                setFieldValue(field.name, newValues);
                event.target.value = ''; // Clear the input field
            }
        }
    };

    const handleRemoveTag = (indexToRemove) => {
        const { value } = field;
        const { setFieldValue } = form;
        const newValues = value.filter((_, index) => index !== indexToRemove);
        setFieldValue(field.name, newValues);
    };

    return (
        <div>
            <div className="d-flex flex-wrap">
                {field.value.map((tag, index) => (
                    <span key={index} className="badge bg-primary me-2 mb-2">
                        {tag} 
                        <button 
                            type="button" 
                            className="btn-close btn-close-white ms-2" 
                            aria-label="Close" 
                            onClick={() => handleRemoveTag(index)}
                        ></button>
                    </span>
                ))}
            </div>
            <input
                type="text"
                className="form-control"
                onKeyDown={handleKeyDown}
                placeholder="Enter values separated by commas"
            />
            <ErrorMessage name={field.name} component="div" className="text-danger" />
        </div>
    );
};

export default MultiInput;
