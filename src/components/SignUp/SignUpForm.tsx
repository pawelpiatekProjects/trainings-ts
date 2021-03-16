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
    handleSignUp: (name: string, lastName: string, email: string, password: string) => void
}

const SignUpForm: React.FC<Props> = ({validationSchema, handleSignUp}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validationSchema}
            onSubmit={({name, lastName, email, password}) => {
                handleSignUp(name, lastName, email, password);
            }}>
            {({errors, touched, isValid}) => (
                <Form>
                    <FieldWrapper >
                        <Field name='name' placeholder='Name'/>
                    </FieldWrapper>
                    {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                    ) : <Error></Error>}
                    <FieldWrapper >
                        <Field name='lastName' placeholder='Last Name'/>
                    </FieldWrapper>
                    {errors.lastName && touched.lastName ? (
                        <Error>{errors.lastName}</Error>
                    ) : <Error></Error>}

                    <FieldWrapper >

                        <Field name='email' placeholder='Email'/>
                    </FieldWrapper>
                    {errors.email && touched.email ? (
                        <Error>{errors.email}</Error>
                    ) : <Error></Error>}

                    <FieldWrapper >
                        <Field name='password' placeholder='Password' type='password'/>
                    </FieldWrapper>
                    {errors.password && touched.password ? (
                        <Error>{errors.password}</Error>
                    ) : <Error></Error>}

                    <FieldWrapper >

                        <Field name='confirmPassword' placeholder='Confirm Password' type='password'/>
                    </FieldWrapper>
                    {errors.confirmPassword && touched.confirmPassword ? (
                        <Error>{errors.confirmPassword}</Error>
                    ) : <Error></Error>}

                    {/*submit button and link to sign in*/}
                    <button type='submit'>Sign up</button>
                    <Link to='/sign-in'>Sign In</Link>


                </Form>
            )}
        </Formik>
    )
};

export default SignUpForm;
