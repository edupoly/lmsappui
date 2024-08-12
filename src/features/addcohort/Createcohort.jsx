import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useCreatecohortApiMutation } from '../../services/createcohort.service';
import FormCard from './FormCard';
import TextInput from './TextInput';
import FileInput from './FileInput';
import TagsInput from './TagsInput';
import SubmitButton from './SubmitButton';

const initialValues = {
    cohortname: '',
    cohortid: '',
    cohorttags: [''],
    cohortpic: null,
};

const validationSchema = Yup.object({
    cohortname: Yup.string().required('Required'),
    cohortid: Yup.string().required('Required'),
    cohorttags: Yup.array().of(Yup.string().required('Required')).min(1, 'At least one tag is required'),
    cohortpic: Yup.mixed().required('A cohort picture is required'),
});

function Createcohort() {
    const navigate = useNavigate();
    const [createcohortFn] = useCreatecohortApiMutation();

    const onSubmit = (values) => {
        const formData = new FormData();
        formData.append('cohortname', values.cohortname);
        formData.append('cohortid', values.cohortid);
        formData.append('cohortpic', values.cohortpic);

        values.cohorttags.forEach((tag, index) => {
            formData.append(`cohorttags[${index}]`, tag);
        });

        createcohortFn(formData)
            .then((response) => {
                console.log('Cohort created successfully:', response);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error('Error creating cohort:', error);
            });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            encType="multipart/form-data"
        >
            {({ values, setFieldValue }) => (
                <FormCard title="Create a New Cohort">
                    <TextInput name="cohortname" label="Cohort Name" />
                    <TextInput name="cohortid" label="Cohort ID" />
                    <TagsInput name="cohorttags" />
                    <FileInput name="cohortpic" setFieldValue={setFieldValue} />
                    <SubmitButton />
                </FormCard>
            )}
        </Formik>
    );
}

export default Createcohort;
