import React from 'react';

function FileInput({ name, setFieldValue }) {
    return (
        <div className="mb-3">
            <label className="form-label">Cohort Picture</label>
            <input 
                type="file" 
                name={name} 
                className="form-control" 
                onChange={(event) => {
                    setFieldValue(name, event.currentTarget.files[0]);
                }} 
            />
        </div>
    );
}

export default FileInput;
