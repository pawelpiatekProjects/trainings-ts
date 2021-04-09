import React, {useContext, useState} from 'react';
import {FormWrapper, MoreInfoButton, InfoPrompt} from './TrainingDayExerciseFormStyles';
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
import {TrainingPlanContext, TrainingPlanExercise} from "../../../../contexts/TrainingPlansContext";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {ToastContext} from "../../../../contexts/ToastContext";
import {Info} from '@material-ui/icons';

// TODO: add controller here

const TrainingDayExerciseForm: React.FC = () => {
    const {onAddTrainingDayExercise, openedPlan, onEditExercise} = useContext(TrainingPlanContext);
    const {popUpConfig, onCloseModal} = useContext(PopUpContext);
    const {emitNewMessage} = useContext(ToastContext);

    const [isSeriesInfoOpen, setIsSeriesInfoOpen] = useState(false);

    const toggleInfoOpen = () => {
        setIsSeriesInfoOpen(prevState => !prevState);
    }

    const NewExerciseSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short')
            .max(50, 'Too Long')
            .required('Name is required'),
        series: Yup.string() // Todo: change
            .min(2, 'Too Short')
            .max(50, 'Too Long')
            .required('Reps are required'),
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
    const mode = popUpConfig.openModalData!.mode!;
    let exercise: TrainingPlanExercise | null;

    if(mode === 'edit') {
        const trainingDay = openedPlan.trainingDays.filter(trainingDay => trainingDay._id === popUpConfig.openModalData!.planConfig!.dayId!)[0];
        exercise = trainingDay.exercises.filter(exercise => exercise._id === popUpConfig.openModalData!.planConfig!.exerciseId!)[0];
    } else {
        exercise = null
    }


    return (
        <FormWrapper>
            <FormHeader>{mode === 'add' ? 'Add' : 'Edit'} exercise</FormHeader>
            <Formik initialValues={{
                    name: mode === 'edit' ? exercise!.exerciseName! : '',
                    series: mode === 'edit' ? exercise!.repsInSeries!.join(',') : '',
                    weight: mode === 'edit' ? exercise!.weight! : '',
                    pause: mode === 'edit' ? exercise!.pause! : '',
                    rate: mode === 'edit' ? exercise!.rate! : '',
                    ytLink: mode === 'edit' ? exercise!.ytLink! : '',
                    description: mode === 'edit' ? exercise!.exerciseDescription! : '',
            }}
                    enableReinitialize={true}
                    validationSchema={NewExerciseSchema}
                    onSubmit={({name, series, weight, pause, rate, ytLink, description}, {resetForm}) => {
                        if(mode === 'add') {
                            onAddTrainingDayExercise(
                                popUpConfig.openModalData.planConfig!.dayId!,
                                name,
                                series,
                                weight,
                                pause,
                                rate,
                                ytLink,
                                description
                            );
                            emitNewMessage('Added new exercise');
                        } else {
                            onEditExercise(
                                popUpConfig.openModalData.planConfig!.dayId!,
                                popUpConfig.openModalData.planConfig!.exerciseId!,
                                name,
                                series,
                                weight,
                                pause,
                                rate,
                                ytLink,
                                description
                            )
                            emitNewMessage('Changed exercise');
                        }
                        onCloseModal();
                        resetForm();

                    }}
            >
                {({errors, touched, isValid, dirty}) => (
                    <Form>
                        <FieldGroup>
                            <FieldGroupItem>
                                <FieldLabel>exercise name</FieldLabel>
                                <FieldWrapper isError={errors.name} touched={touched.name}>
                                    <Field
                                        name='name'
                                        placeholder='exercise name'

                                    />
                                </FieldWrapper>
                                {errors.name && touched.name ? (
                                    <Error>{errors.name}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>series</FieldLabel>
                                <FieldWrapper isError={errors.series} touched={touched.series}>
                                    <Field
                                        name='series'
                                        placeholder='reps in series'
                                    />
                                    <MoreInfoButton
                                        type='button'
                                        isOpen={isSeriesInfoOpen}
                                        onClick={() => toggleInfoOpen()}
                                    >
                                        <Info/>
                                    </MoreInfoButton>
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
                                    <Field
                                        name='weight'
                                        type='number'
                                        placeholder='weight (kg)'
                                    />
                                </FieldWrapper>
                                {errors.weight && touched.weight ? (
                                    <Error>{errors.weight}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>break</FieldLabel>
                                <FieldWrapper isError={errors.pause} touched={touched.pause}>
                                    <Field
                                        name='pause'
                                        type='number'
                                        placeholder='break (s)'
                                    />
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
                                    <Field
                                        name='rate'
                                        type='number'
                                        placeholder='rate'
                                    />
                                </FieldWrapper>
                                {errors.rate && touched.rate ? (
                                    <Error>{errors.rate}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>you tube link</FieldLabel>
                                <FieldWrapper isError={errors.ytLink} touched={touched.ytLink}>
                                    <Field
                                        name='ytLink'
                                        placeholder='you tube link'
                                    />
                                </FieldWrapper>
                                {errors.ytLink && touched.ytLink ? (
                                    <Error>{errors.ytLink}</Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                        </FieldGroup>

                        <FieldLabel>description</FieldLabel>
                        <FieldWrapper isError={errors.description} touched={touched.description}>
                            <Field
                                name='description'
                                placeholder='description'
                                as='textarea'
                                rows={6}
                            />
                        </FieldWrapper>
                        {errors.description && touched.description ? (
                            <Error>{errors.description}</Error>
                        ) : <Error></Error>}

                        <SecondaryButton disabled={!(isValid && dirty)} type='submit'>
                            {mode === 'add' ? 'Add' : 'Edit'}
                        </SecondaryButton>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    )
};

export default TrainingDayExerciseForm;