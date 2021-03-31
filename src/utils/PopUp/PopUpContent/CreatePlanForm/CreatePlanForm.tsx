import React, {useContext} from 'react';
import {FormWrapper} from './CreatePlanFormStyles';
import {Formik, Form, Field} from 'formik';
import {
    FormHeader,
    FieldLabel,
    FieldWrapper,
    Error
} from '../../../../assets/styles/customStylesComponents/formComponents';
import {SecondaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import * as Yup from "yup";
import  {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import  {PopUpContext} from "../../../../contexts/PopUpContext";

const CreatePlanForm: React.FC = () => {
    const {onCreateNewPlan} = useContext(TrainingPlanContext);
    const {onCloseModal} = useContext(PopUpContext);

    const NewPlanSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short')
            .max(50, 'Too Long')
            .required('Name is required'),
        description: Yup.string()
            .max(250, 'Too Long'),
        image: Yup.string()
            .required('Password is required'),
    });

    return (
        <FormWrapper>
            <FormHeader>Create Plan</FormHeader>
            <Formik initialValues={{
                name: '',
                description: '',
                image: ''
            }}
                validationSchema={NewPlanSchema}
                    onSubmit={({name, description, image}, {resetForm}) => {
                        onCreateNewPlan(name, description, image);
                        onCloseModal();
                        resetForm();
                    }}
            >
                {({errors, touched, isValid, dirty}) => (
                    <Form>
                        <FieldLabel>name</FieldLabel>
                        <FieldWrapper isError={errors.name} touched={touched.name}>
                            <Field name='name' placeholder='plan name'/>
                        </FieldWrapper>
                        {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                        ) : <Error></Error>}
                        <FieldLabel>description</FieldLabel>
                        <FieldWrapper isError={errors.description} touched={touched.description}>
                            <Field name='description' placeholder='plan description'/>
                        </FieldWrapper>
                        {errors.description && touched.description ? (
                            <Error>{errors.description}</Error>
                        ) : <Error></Error>}
                        <FieldLabel>plan image</FieldLabel>
                        <FieldWrapper isError={errors.image} touched={touched.image}>
                            <Field name='image' placeholder='plan image'/>
                        </FieldWrapper>
                        {errors.image && touched.image ? (
                            <Error>{errors.image}</Error>
                        ) : <Error></Error>}
                        <SecondaryButton>Create</SecondaryButton>
                    </Form>
                )}

            </Formik>
        </FormWrapper>
    )
};

export default CreatePlanForm