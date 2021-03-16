import React from 'react';
import SignIn from "./SignIn";
import * as Yup from 'yup';

const SignInController: React.FC = () => {

    const SignInSchema = Yup.object().shape({
        email: Yup.string()
            .min(2, 'Too Short')
            .max(50, 'Too Long')
            .required('Email is required')
            .email('Invalid email'),
        password: Yup.string()
            .min(8, 'Too Short')
            .max(20, 'Too Long')
            .required('Password is required'),
    });

    const onSignIn = (email: string, password: string) => {
        console.log(`email: ${email}, password: ${password}`)
    }

    return (
        <>
           <SignIn validationSchema={SignInSchema} handleSignIn={onSignIn}/>
        </>
    )
};

export default SignInController;
