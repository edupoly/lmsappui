import React from 'react';

function FormCard({ title, children }) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm p-4">
                        <h1 className="mb-4 text-center">{title}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCard;
