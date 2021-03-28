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
    FieldGroup,
    FieldGroupItem,
    FieldWrapper,
    FieldLabel
} from '../../../assets/styles/customStylesComponents/formComponents';
import {FormWrapper} from './SignUpformStyles';
import {SecondaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import * as variables from "../../../assets/styles/variables";
import {Facebook, Person, MailOutline, Lock, AccountCircle, ErrorOutline} from "@material-ui/icons";


interface Props {
    validationSchema: any,
    handleSignUp: (name: string, lastName: string, userName: string, email: string, password: string) => void
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
                    userName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={validationSchema}
                onSubmit={({name, lastName, userName, email, password}) => {
                    handleSignUp(name, lastName, userName, email, password);
                }}>
                {({errors, touched, isValid, dirty}) => (
                    <Form>
                        <FieldGroup>
                            <FieldGroupItem>
                                <FieldLabel>name</FieldLabel>
                                <FieldWrapper isError={errors.name} touched={touched.name}>
                                    <Person/>
                                    <Field name='name' placeholder='enter name'/>
                                </FieldWrapper>
                                {errors.name && touched.name ? (
                                    <Error>
                                        <ErrorOutline/>
                                        {errors.name}
                                    </Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>last name</FieldLabel>
                                <FieldWrapper isError={errors.lastName} touched={touched.lastName}>
                                    <Person/>
                                    <Field name='lastName' placeholder='enter lastname'/>
                                </FieldWrapper>
                                {errors.lastName && touched.lastName ? (
                                    <Error>
                                        <ErrorOutline/>
                                        {errors.lastName}
                                    </Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                        </FieldGroup>

                        <FieldGroup>
                            <FieldGroupItem>
                                <FieldLabel>username</FieldLabel>
                                <FieldWrapper isError={errors.userName} touched={touched.userName}>
                                    <AccountCircle/>
                                    <Field name='userName' placeholder='enter username' type='text'/>
                                </FieldWrapper>
                                {errors.userName && touched.userName ? (
                                    <Error>
                                        <ErrorOutline/>
                                        {errors.userName}
                                    </Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>e-mail</FieldLabel>
                                <FieldWrapper isError={errors.email} touched={touched.email}>
                                    <MailOutline/>
                                    <Field name='email' placeholder='enter e-mail'/>
                                </FieldWrapper>
                                {errors.email && touched.email ? (
                                    <Error>
                                        <ErrorOutline/>
                                        {errors.email}
                                    </Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                        </FieldGroup>

                        <FieldGroup>
                            <FieldGroupItem>
                                <FieldLabel>password</FieldLabel>
                                <FieldWrapper isError={errors.password} touched={touched.password}>
                                    <Lock/>
                                    <Field name='password' placeholder='8+ characters' type='password'/>
                                </FieldWrapper>
                                {errors.password && touched.password ? (
                                    <Error>
                                        <ErrorOutline/>
                                        {errors.password}
                                    </Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                            <FieldGroupItem>
                                <FieldLabel>confirm password</FieldLabel>
                                <FieldWrapper isError={errors.confirmPassword} touched={touched.confirmPassword}>
                                    <Lock/>
                                    <Field name='confirmPassword' placeholder='8+ characters' type='password'/>
                                </FieldWrapper>
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <Error>
                                        <ErrorOutline/>
                                        {errors.confirmPassword}
                                    </Error>
                                ) : <Error></Error>}
                            </FieldGroupItem>
                        </FieldGroup>

                        <SecondaryButton disabled={!(isValid && dirty)} type='submit'>Sign Up</SecondaryButton>
                    </Form>
                )}
            </Formik>
        </FormWrapper>

    )
};

export default SignUpForm;
