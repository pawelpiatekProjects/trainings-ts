import React from 'react';
import {Formik, Field, Form} from "formik";
import {Link} from "react-router-dom";
import {GoogleOutlined} from '@ant-design/icons';
import {
    FormHeader,
    FormParagraph,
    SocialMediaSignUp,
    SocialMediaButton,
    Divider,
    Error,
    FieldWrapper,
    FieldLabel
} from '../../../assets/styles/customStylesComponents/formComponents';
import {FormWrapper} from './SignUpformStyles';
import {SecondaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import * as variables from "../../../assets/styles/variables";
import {Facebook, Person, MailOutline, Lock} from "@material-ui/icons";


interface Props {
    validationSchema: any,
    handleSignUp: (name: string, lastName: string, email: string, password: string) => void
}

const SignUpForm: React.FC<Props> = ({validationSchema, handleSignUp}) => {
    return (
        <FormWrapper>
            <FormHeader>Sign Up</FormHeader>
            <FormParagraph>
                Already have an account?
                <Link to='sign-in'>Sign In</Link>
            </FormParagraph>
            <SocialMediaSignUp>
                <SocialMediaButton color={variables.googleOrange}>
                    <GoogleOutlined/>
                    <span>Sign Up with Google</span>
                </SocialMediaButton>
                <SocialMediaButton color={variables.facebookBlue}>
                    <Facebook/>
                    <span>Sign Up with Facebook</span>
                </SocialMediaButton>
            </SocialMediaSignUp>
            <Divider>or</Divider>
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
                        <FieldLabel>name</FieldLabel>
                        <FieldWrapper isError={errors.name} touched={touched.name}>
                            <Person/>
                            <Field name='name' placeholder='Name'/>
                        </FieldWrapper>
                        {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                        ) : <Error></Error>}

                        <FieldLabel>last name</FieldLabel>
                        <FieldWrapper isError={errors.lastName} touched={touched.lastName}>
                            <Person/>
                            <Field name='lastName' placeholder='Last Name'/>
                        </FieldWrapper>
                        {errors.lastName && touched.lastName ? (
                            <Error>{errors.lastName}</Error>
                        ) : <Error></Error>}

                        <FieldLabel>e-mail</FieldLabel>
                        <FieldWrapper isError={errors.email} touched={touched.email}>
                            <MailOutline/>
                            <Field name='email' placeholder='Email'/>
                        </FieldWrapper>
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : <Error></Error>}

                        <FieldLabel>password</FieldLabel>
                        <FieldWrapper isError={errors.password} touched={touched.password}>
                            <Lock/>
                            <Field name='password' placeholder='Password' type='password'/>
                        </FieldWrapper>
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : <Error></Error>}

                        <FieldLabel>confirm password</FieldLabel>
                        <FieldWrapper isError={errors.confirmPassword} touched={touched.confirmPassword}>
                            <Lock/>
                            <Field name='confirmPassword' placeholder='Confirm Password' type='password'/>
                        </FieldWrapper>
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <Error>{errors.confirmPassword}</Error>
                        ) : <Error></Error>}

                        <SecondaryButton type='submit'>Sign Up</SecondaryButton>


                    </Form>
                )}
            </Formik>
        </FormWrapper>

    )
};

export default SignUpForm;
