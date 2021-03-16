import React from 'react';
import SignUp from "./SignUp";
import * as Yup from 'yup';

const SignUpController: React.FC = () => {

    const SignUpSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        lastName: Yup .string()
            .required('Last name is required'),
        email: Yup.string()
            .min(2, 'Too Short')
            .max(50, 'Too Long')
            .required('Email is required')
            .email('Invalid email'),
        password: Yup.string()
            .min(8, 'Too Short')
            .max(20, 'Too Long')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .min(8, 'Too Short')
            .max(20, 'Too Long')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Password is required'),

    });

    const onSignUp = (name: string, lastName: string, email: string, password: string) => {
        console.log(`name: ${name}, lastNAme: ${lastName}, email: ${email}, password: ${password}`);
    }
    return (
        <>
            <SignUp validationSchema={SignUpSchema} handleSignUp={onSignUp}/>
        </>
    )
};

export default SignUpController;
