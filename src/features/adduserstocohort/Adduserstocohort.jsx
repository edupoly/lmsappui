import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Field, Formik, Form } from 'formik';
import MultiInput from '../addcohort/MultiInput';
import { useGetusersofacohortApiQuery } from '../../services/getusersofacohort.service';
import { useAdduserstocohortApiMutation } from '../../services/adduserstocohort.service';

function Adduserstocohort() {
    const { cohortId } = useParams();
    const [searchedCohortId, setSearchedCohortId] = useState('');
    const [initialContacts, setInitialContacts] = useState([]);
    const [manualContacts, setManualContacts] = useState([]);

    const { data: users, isError: isErrorFetching } = useGetusersofacohortApiQuery(searchedCohortId, { skip: !searchedCohortId });
    const [addUsersToCohort, { isLoading, isError }] = useAdduserstocohortApiMutation();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchedCohortId) {
            setSearchedCohortId(searchedCohortId);
        }

        if (users) {
            const contacts = users.map(user => user.contact);
            setInitialContacts(contacts);
        }
    };

    const handleSubmit = (values, { resetForm }) => {
        const userstocohortdetails = {
            cohortId,
            contacts: [...values.contacts, ...manualContacts],
        };

        console.log('Payload being sent:', userstocohortdetails);

        addUsersToCohort(userstocohortdetails)
            .unwrap()
            .then(() => {
                resetForm();
                setManualContacts([]);
                setInitialContacts([]);
                setSearchedCohortId('');
            })
            .catch((error) => {
                console.error('Error adding users to cohort:', error);
            });
    };

    return (
        <div className="container mt-4">
            <Link to="../viewallcohorts" className="btn btn-outline-primary d-inline-flex align-items-center mb-4">
                <i className="bi bi-arrow-left me-2"></i> Back
            </Link>

            <div className="card shadow-lg p-4 mb-4">
                <h2 className="mb-4">Search Students by Cohort ID</h2>
                <form onSubmit={handleSearch} className="mb-4">
                    <div className="input-group">
                        <input
                            type="text"
                            value={searchedCohortId}
                            onChange={(e) => setSearchedCohortId(e.target.value)}
                            placeholder="Enter Cohort ID"
                            className="form-control rounded-pill shadow-sm"
                        />
                        <button type="submit" className="btn btn-primary rounded-pill ml-2">
                            <i className="fas fa-search"></i> Search
                        </button>
                    </div>
                    {isErrorFetching && <div className="alert alert-danger mt-3">Error fetching students. Please try again.</div>}
                </form>
            </div>

            <div className="card shadow-lg p-4">
                <h2 className="mb-4">Add Users to Cohort {cohortId}:</h2>
                <Formik
                    initialValues={{ contacts: initialContacts }}
                    enableReinitialize
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, handleSubmit, resetForm }) => (
                        <Form onSubmit={handleSubmit} className="form-inline">
                            <div className="form-group mb-4 w-100">
                                <Field
                                    name="contacts"
                                    component={MultiInput}
                                    onChange={(e) => {
                                        const newContacts = e.target.value.split(',').map(contact => contact.trim());
                                        setManualContacts(newContacts);
                                        handleChange(e);
                                    }}
                                    value={values.contacts.join(', ')}
                                    className="form-control rounded-pill shadow-sm w-100"
                                    placeholder="Enter contacts separated by commas"
                                />
                            </div>
                            <button type="submit" className="btn btn-success rounded-pill" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i> Adding Users...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-user-plus"></i> Add Users
                                    </>
                                )}
                            </button>
                            {isError && <div className="alert alert-danger mt-3 w-100">Error occurred while adding users. Please try again.</div>}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Adduserstocohort;
