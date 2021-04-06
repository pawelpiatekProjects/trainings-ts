import React, {useContext} from 'react';
import {FormWrapper} from './PlanFormStyles';
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
import {ToastContext} from "../../../../contexts/ToastContext";

const PlanForm: React.FC = () => {
    const {onCreateNewPlan, openedPlan, onEditTrainingPlan} = useContext(TrainingPlanContext);
    const {onCloseModal, popUpConfig} = useContext(PopUpContext);
    const {emitNewMessage} = useContext(ToastContext);

    const mode = popUpConfig.openModalData!.mode!;


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
            <FormHeader>{mode === 'edit' ? 'Edit' : 'Create'} Plan</FormHeader>
            <Formik initialValues={{
                name: mode === 'edit' ? openedPlan.trainingPlanName : '',
                description: mode === 'edit' ? openedPlan.description : '',
                image: mode === 'edit' ? openedPlan.image : ''
            }}
                validationSchema={NewPlanSchema}
                    onSubmit={({name, description, image}, {resetForm}) => {
                        if(mode === 'edit') {
                            onEditTrainingPlan(name, image, description!);
                        } else {
                            onCreateNewPlan(name,  image, description!);
                            emitNewMessage('Created training plan')
                        }
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
                        <SecondaryButton disabled={!(isValid && dirty)} type='submit'>Create</SecondaryButton>
                    </Form>
                )}

            </Formik>
        </FormWrapper>
    )
};

export default PlanForm