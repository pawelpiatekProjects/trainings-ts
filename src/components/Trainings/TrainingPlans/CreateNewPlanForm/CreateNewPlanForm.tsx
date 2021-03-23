import React, {useContext} from "react";
import styled from "styled-components";
import {Formik, Field, Form} from "formik";
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";


const FieldLabel = styled.label`

`;

const FieldWrapper = styled.div`

`;

const Error = styled.p`

`;

interface Props {
    validationSchema: any
}

const CreateNewPlanForm: React.FC<Props> = ({validationSchema}) => {
    const {onCreateNewPlan} = useContext(TrainingPlanContext);

    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                image: ''
            }}
            validationSchema={validationSchema}
            onSubmit={({name, description, image}) => {
                // handleFormCreate();
                onCreateNewPlan(name, description, image)
            }}>
            {({errors, touched, }) => (
                <Form>
                    <FieldLabel>Name</FieldLabel>
                    {/*Todo: add validation on fronted*/}
                    <FieldWrapper >

                        <Field name='name' placeholder='Enter name'/>
                    </FieldWrapper>
                    {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                    ) : <Error></Error>}
                    <FieldLabel>Description</FieldLabel>
                    <FieldWrapper >
                        <Field name='description' placeholder='Enter description' type='text'/>
                    </FieldWrapper>
                    {errors.description && touched.description ? (
                        <Error>{errors.description}</Error>
                    ) : <Error></Error>}
                    <FieldLabel>Description</FieldLabel>
                    <FieldWrapper >
                        <Field name='image' placeholder='Enter description' as='select'>
                            <option value="img1">Img1</option>
                            <option value="img2">Img2</option>
                            <option value="img3">Img3</option>
                        </Field>
                    </FieldWrapper>
                    {errors.image && touched.image ? (
                        <Error>{errors.image}</Error>
                    ) : <Error></Error>}

                    {/*Buttons for submit form and redirect to sign up or sign in*/}
                    <button type='submit'>Create</button>

                </Form>
            )}
        </Formik>
    )
};

export default CreateNewPlanForm;
