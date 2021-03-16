import React from 'react';
import SignIn from "./SignIn";
import * as Yup from 'yup';
import {post} from '../../services/restService';

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

    const onSignIn = async(email: string, password: string) => {
        console.log(`email: ${email}, password: ${password}`)

        try {
            const response = await post<any>('auth/login', {
                email: email,
                password: password
            });

            console.log('Login response: ', response);
        } catch (e) {
            console.log('Error: ', e)
        }
    }

    return (
        <>
           <SignIn validationSchema={SignInSchema} handleSignIn={onSignIn}/>
        </>
    )
};

export default SignInController;
