import React, {useContext} from 'react';
import {Wrapper} from './TrainingDayFormStyles';
import {Formik, Field, Form} from 'formik';
import {
    FormHeader,
    FieldLabel,
    FieldWrapper, Error
} from '../../../../assets/styles/customStylesComponents/formComponents';
import {SecondaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import * as Yup from "yup";
import {TrainingDay, TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {ToastContext} from "../../../../contexts/ToastContext";


const TrainingDayForm: React.FC = () => {
    const {onCreateNewTrainingDay, openedPlan, onEditTrainingDay} = useContext(TrainingPlanContext);
    const {onCloseModal, popUpConfig} = useContext(PopUpContext);
    const {emitNewMessage} = useContext(ToastContext);

    const mode = popUpConfig.openModalData!.mode!;

    let trainingDay: TrainingDay | null;

    if(mode === 'edit') {
        trainingDay = openedPlan.trainingDays.filter(trainingDay => trainingDay._id === popUpConfig.openModalData!.planConfig!.dayId!)[0];
    } else {
        trainingDay = null;
    }

    const NewTrainingDaySchema = Yup.object().shape({
        name: Yup.string()
            .max(50, 'Too Long')
            .required('Name is required')
    });
    return (
        <Wrapper>
            <FormHeader>{mode === 'edit' ? 'Edit' : 'Create'} Training Day</FormHeader>
            <Formik initialValues={{
                name: mode === 'edit' && trainingDay ? trainingDay.trainingDayName : ''
            }}
                    validationSchema={NewTrainingDaySchema}
                    onSubmit={({name}, {resetForm}) => {
                        console.log(name);
                        if(mode === 'edit') {
                            onEditTrainingDay(trainingDay!._id, name);
                        } else {
                            onCreateNewTrainingDay(name);
                            emitNewMessage('Created training day');
                        }
                        resetForm();
                        onCloseModal();
                    }}>
                {({errors, touched, isValid, dirty}) => (
                    <Form>
                        <FieldLabel>training day name</FieldLabel>
                        <FieldWrapper isError={errors.name} touched={touched.name}>
                            <Field name='name' placeholder='training day name'/>
                        </FieldWrapper>
                        {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                        ) : <Error></Error>}
                        <SecondaryButton disabled={!(isValid && dirty)} type='submit'>Create</SecondaryButton>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
};

export default TrainingDayForm;