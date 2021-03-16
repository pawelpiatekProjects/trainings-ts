import React from 'react';
import {Formik, Field, Form} from "formik";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const FieldLabel = styled.label`

`;

const FieldWrapper = styled.div`

`;

const Error = styled.p`

`;

interface Props {
    validationSchema: any,
    handleSignIn: (email: string, password: string) => void
}

const SignInForm: React.FC<Props> = ({validationSchema, handleSignIn}) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={({email, password}) => {
                handleSignIn(email,password);
            }}>
            {({errors, touched, }) => (
                <Form>
                    <FieldLabel>Email</FieldLabel>
                    {/*Todo: add validation on fronted*/}
                    <FieldWrapper >

                        <Field name='email' placeholder='name@domain.com'/>
                    </FieldWrapper>
                    {errors.email && touched.email ? (
                        <Error>{errors.email}</Error>
                    ) : <Error></Error>}
                    <FieldLabel>Password</FieldLabel>
                    <FieldWrapper >
                        <Field name='password' placeholder='at least 8 characters' type='password'/>
                    </FieldWrapper>
                    {errors.password && touched.password ? (
                        <Error>{errors.password}</Error>
                    ) : <Error></Error>}

                    {/*Buttons for submit form and redirect to sign up or sign in*/}
                    <button type='submit'>Sign In</button>
                    <Link to='/sign-up'>Sign Up</Link>
                    <Link to='#'>Forgot password?</Link>

                </Form>
            )}
        </Formik>
    )
};

export default SignInForm;
