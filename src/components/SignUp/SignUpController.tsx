import React from 'react';
import SignUp from "./SignUp";
import * as Yup from 'yup';
import {post} from '../../services/restService';
import {RouteComponentProps} from "react-router-dom";

interface Props extends RouteComponentProps{ }

const SignUpController: React.FC<Props> = ({history}) => {

    const SignUpSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .max(20, 'To Long'),
        lastName: Yup .string()
            .required('Last name is required')
            .max(20, 'Too Long'),
        userName: Yup.string()
            .required('User name is required')
            .max(20, 'Too Long'),
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

     const onSignUp = async (name: string, lastName: string, userName: string, email: string, password: string) => {
        console.log(`name: ${name}, lastNAme: ${lastName}, email: ${email}, password: ${password}`);

        try {
            const response = await post<any>('auth/signup', {
                email: email,
                name: lastName,
                lastName: lastName,
                userName: userName,
                password: password
            });

            console.log(response);

            // todo: Add pop up after sign up with message and redirect button
            history.push('/dashboard');


        } catch (e) {
            console.log('Error: ', e);
        }
    }
    return (
        <>
            <SignUp validationSchema={SignUpSchema} handleSignUp={onSignUp}/>
        </>
    )
};

export default SignUpController;
