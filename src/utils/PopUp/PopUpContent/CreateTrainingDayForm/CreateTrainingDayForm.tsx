import React, {useContext} from 'react';
import {Wrapper} from './CreateTrainingDayFormStyles';
import {Formik, Field, Form} from 'formik';
import {
    FormHeader,
    FieldLabel,
    FieldWrapper, Error
} from '../../../../assets/styles/customStylesComponents/formComponents';
import {SecondaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import * as Yup from "yup";
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {ToastContext} from "../../../../contexts/ToastContext";


const CreateTrainingDayForm: React.FC = () => {
    const {onCreateNewTrainingDay} = useContext(TrainingPlanContext);
    const {onCloseModal} = useContext(PopUpContext);
    const {emitNewMessage} = useContext(ToastContext);

    const NewTrainingDaySchema = Yup.object().shape({
        name: Yup.string()
            .max(50, 'Too Long')
            .required('Name is required')
    });
    return (
        <Wrapper>
            <FormHeader>Create Training Day</FormHeader>
            <Formik initialValues={{
                name: ''
            }}
                    validationSchema={NewTrainingDaySchema}
                    onSubmit={({name}, {resetForm}) => {
                        console.log(name)
                        onCreateNewTrainingDay(name);
                        resetForm();
                        onCloseModal();
                        emitNewMessage('Created training day');
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

export default CreateTrainingDayForm;