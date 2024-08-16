import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useCreatecohortApiMutation } from '../../services/createcohorts.service';
import MultiInput from './MultiInput'; // Import the custom MultiInput component
import { Link } from 'react-router-dom';

// Validation schema for the form
const validationSchema = Yup.object({
    cohortname: Yup.string().required('Required'),
    cohortid: Yup.string().required('Required'),
    cohorttags: Yup.array().of(Yup.string().required('Required')).min(1, 'At least one tag is required'),
    cohortpic: Yup.mixed().required('A cohort picture is required'),
});

// Initial values for the form fields
const initialValues = {
    cohortname: '',
    cohortid: '',
    cohorttags: [],
    cohortpic: null,
};

// Main component for creating a cohort
function CreateCohort() {
    const navigate = useNavigate();
    const [createcohortFn] = useCreatecohortApiMutation();

    // Handle form submission
    const onSubmit = (values) => {
        const formData = new FormData();
        formData.append('cohortname', values.cohortname);
        formData.append('cohortid', values.cohortid);
        formData.append('cohortpic', values.cohortpic);

        values.cohorttags.forEach((tag, index) => {
            formData.append(`cohorttags[${index}]`, tag);
        });

        formData.append('createdAt', new Date().toISOString());

        createcohortFn(formData)
            .then((response) => {
                console.log('Cohort created successfully:', response);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error('Error creating cohort:', error.response ? error.response.data : error.message);
            });
    };

    return (
        <div className="container mt-5">
            <Link to=".." className="btn btn-outline-primary d-inline-flex align-items-center mb-4">
                <i className="bi bi-arrow-left me-2"></i> Back
            </Link>
            <div className="row justify-content-center vh-100">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm p-4">
                        <h1 className="mb-4 text-center">Create a New Cohort</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            encType="multipart/form-data"
                        >
                            {({ values, setFieldValue }) => (
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label">Cohort Name</label>
                                        <Field type="text" name="cohortname" className="form-control" />
                                        <ErrorMessage name="cohortname" component="div" className="text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Cohort ID</label>
                                        <Field type="text" name="cohortid" className="form-control" />
                                        <ErrorMessage name="cohortid" component="div" className="text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Cohort Tags</label>
                                        <Field
                                            name="cohorttags"
                                            component={MultiInput}
                                        />
                                        <ErrorMessage name="cohorttags" component="div" className="text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Cohort Picture</label>
                                        <input
                                            type="file"
                                            name="cohortpic"
                                            className="form-control"
                                            onChange={(event) => {
                                                setFieldValue('cohortpic', event.currentTarget.files[0]);
                                            }}
                                        />
                                        <ErrorMessage name="cohortpic" component="div" className="text-danger" />
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCohort;
