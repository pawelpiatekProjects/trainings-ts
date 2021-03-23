import React from 'react';
import {Formik, Field, Form} from "formik";
import {Link} from "react-router-dom";
import * as variables from '../../../assets/styles/variables';
import {Facebook, MailOutline, Lock} from '@material-ui/icons';
import {GoogleOutlined} from '@ant-design/icons';
import {SecondaryButton} from '../../../assets/styles/customStylesComponents/buttons';

import {
    FormWrapper,
    FormHeader,
    FormParagraph,
    SocialMediaSignUp,
    SocialMediaButton,
    Divider,
    FieldLabel,
    FieldWrapper,
    Error,
    ErrorIcon,
    ForgotPassword
} from './SignInFormStyles';


interface Props {
    validationSchema: any,
    handleSignIn: (email: string, password: string) => void
}

const SignInForm: React.FC<Props> = ({validationSchema, handleSignIn}) => {
    return (
        <FormWrapper>
            <FormHeader>Sign In</FormHeader>
            <FormParagraph>
                Don't have an account?
                <Link to='Sign Up'>Sign Up</Link>
            </FormParagraph>
            <SocialMediaSignUp>
                <SocialMediaButton color={variables.googleOrange}>
                    <GoogleOutlined/>
                    <span>Sign In with Google</span>
                </SocialMediaButton>
                <SocialMediaButton color={variables.facebookBlue}>
                    <Facebook/>
                    <span>Sign In with Facebook</span>
                </SocialMediaButton>
            </SocialMediaSignUp>
            <Divider>or</Divider>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={({email, password}) => {
                    handleSignIn(email, password);
                }}>
                {({errors, touched}) => (

                    <Form>
                        <FieldLabel>e-mail</FieldLabel>
                        {/*Todo: add validation on fronted*/}
                        <FieldWrapper isError={errors.email} touched={touched.email}>
                            <MailOutline/>
                            <Field name='email' placeholder='your e-mail'/>
                            <ErrorIcon fontSize='large' isError={errors.email} touched={touched.email}/>
                        </FieldWrapper>


                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : <Error></Error>}
                        <FieldLabel>password</FieldLabel>
                        <FieldWrapper isError={errors.password} touched={touched.password}>
                            <Lock/>
                            <Field name='password' placeholder='your password' type='password'/>
                            <ErrorIcon fontSize='large' isError={errors.password} touched={touched.password}/>
                        </FieldWrapper>


                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : <Error></Error>}

                        <ForgotPassword to='/#'>Forgot your password?</ForgotPassword>
                        <SecondaryButton>Sign In</SecondaryButton>


                    </Form>
                )}
            </Formik>
        </FormWrapper>

    )
};

export default SignInForm;
