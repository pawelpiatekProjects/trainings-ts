import React, {useContext} from 'react';
import {FormWrapper} from './AddTrainingDayExerciseFormStyles';
import {Formik, Form, Field} from 'formik';
import {
    FormHeader,
    FieldLabel,
    FieldWrapper,
    Error,
    FieldGroup,
    FieldGroupItem
} from '../../../../assets/styles/customStylesComponents/formComponents';
import {SecondaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import * as Yup from "yup";
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {ToastContext} from "../../../../contexts/ToastContext";

const AddTrainingDayExerciseForm: React.FC = () => {
    const {onAddTrainingDayExercise} = useContext(TrainingPlanContext);
    const {popUpConfig, onCloseModal} = useContext(PopUpContext);
    const {emitNewMessage} = useContext(ToastContext);

    const NewExerciseSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short')
            .max(50, 'Too Long')
            .required('Name is required'),
        series: Yup.string() // Todo: change
            .min(2, 'Too Short')
            .max(50, 'Too Long')
            .required('Name is required'),
        weight: Yup.string()
            .max(3, 'Are you sure??'),
        pause: Yup.string()
            .max(3, 'Are you sure??'),
        rate: Yup.string()
            .max(5, 'Too Long'),
        ytLink: Yup.string()
            .max(250, 'Too Long'),
        description: Yup.string()
            .max(250, 'Too Long'),

    });
    return (
        <FormWrapper>
            <FormHeader>Add Exercise</FormHeader>
            <Formik initialValues={{
                name: '',
                series: '',
                weight: '',
                pause: '',
                rate: '',
                ytLink: '',
                description: ''
            }}
                    validationSchema={NewExerciseSchema}
                    onSubmit={({name, series, weight, pause, rate, ytLink, description}, {resetForm}) => {
                        console.log('dayId: ', popUpConfig.dayId);
                        onAddTrainingDayExercise(
                            popUpConfig.dayId!,
                            name,
                            series,
                            weight,
                            pause,
                            rate,
                            ytLink,
                            description
                        );
                        onCloseModal();
                        resetForm();
                        emitNewMessage('Added new exercise');
                    }}
            >
                {({errors, touched, isValid, dirty}) => (
                    <Form>
                        <FieldGroup>
                            <FieldGroupItem>
                                <FieldLabel>exercise name</FieldLabel>
                                <FieldWrapper isError={errors.name} touched={touched.name}>
                                    <Field name='name' placeholder='exercise name'/>
                                </FieldWrapper>
                                {errors.name && touched.name ? (
                                    <Error>{errors.name}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>series</FieldLabel>
                                <FieldWrapper isError={errors.series} touched={touched.series}>
                                    <Field name='series' type='number' placeholder='series'/>
                                </FieldWrapper>
                                {errors.series && touched.series ? (
                                    <Error>{errors.series}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                        </FieldGroup>

                        <FieldGroup>
                            <FieldGroupItem>
                                <FieldLabel>weight</FieldLabel>
                                <FieldWrapper isError={errors.weight} touched={touched.weight}>
                                    <Field name='weight' type='number' placeholder='weight (kg)'/>
                                </FieldWrapper>
                                {errors.weight && touched.weight ? (
                                    <Error>{errors.weight}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>break</FieldLabel>
                                <FieldWrapper isError={errors.pause} touched={touched.pause}>
                                    <Field name='pause' type='number' placeholder='break (s)'/>
                                </FieldWrapper>
                                {errors.pause && touched.pause ? (
                                    <Error>{errors.pause}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                        </FieldGroup>

                        <FieldGroup>
                            <FieldGroupItem>
                                <FieldLabel>rate</FieldLabel>
                                <FieldWrapper isError={errors.rate} touched={touched.rate}>
                                    <Field name='rate' type='number' placeholder='rate'/>
                                </FieldWrapper>
                                {errors.rate && touched.rate ? (
                                    <Error>{errors.rate}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>you tube link</FieldLabel>
                                <FieldWrapper isError={errors.ytLink} touched={touched.ytLink}>
                                    <Field name='ytLink' placeholder='you tube link'/>
                                </FieldWrapper>
                                {errors.ytLink && touched.ytLink ? (
                                    <Error>{errors.ytLink}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                        </FieldGroup>

                        <FieldLabel>description</FieldLabel>
                        <FieldWrapper isError={errors.description} touched={touched.description}>
                            <Field name='description' placeholder='description'/>
                        </FieldWrapper>
                        {errors.description && touched.description ? (
                            <Error>{errors.description}</Error>
                        ) : <Error></Error>}

                        <SecondaryButton disabled={!(isValid && dirty)} type='submit'>Add</SecondaryButton>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    )
};

export default AddTrainingDayExerciseForm;