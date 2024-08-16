import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useAddcohortstouserMutation } from '../../services/addcohortstouser.service';
import MultiInput from '../addcohort/MultiInput';

function Cohortstouser({ user }) {
    const [addcohortstouserFn] = useAddcohortstouserMutation();

    return (
        <div className="card mt-4 shadow-sm" style={{ borderRadius: '15px', padding: '20px' }}>
            <h3 className="card-title text-center mb-4">Add cohorts to {user.username}</h3>
            <Formik
                initialValues={{ cohortIds: [] }}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        await addcohortstouserFn({ userId: user._id, cohortIds: values.cohortIds });
                        alert(`Cohorts successfully added to ${user.username}!`);
                        resetForm(); // Reset the form after submission
                    } catch (error) {
                        console.error("Failed to add cohorts to user:", error);
                    }
                }}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field 
                            name="cohortIds" 
                            component={MultiInput} 
                            placeholder="Enter cohort IDs"
                        />
                        <div className="text-center mt-3">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                style={{ borderRadius: '20px', padding: '10px 20px' }}
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Cohortstouser;
