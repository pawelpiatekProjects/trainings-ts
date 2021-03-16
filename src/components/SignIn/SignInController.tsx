import React, {useContext} from 'react';
import SignIn from "./SignIn";
import * as Yup from 'yup';
import {post} from '../../services/restService';
import { RouteComponentProps} from 'react-router-dom';
import {UserAuthenticationContext} from "../../contexts/UserAuthenticationContext";

interface Props extends RouteComponentProps{ }

const SignInController: React.FC<Props> = ({history}) => {

    const {onLogIn} = useContext(UserAuthenticationContext)

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
            const {data: {token, userId}} = await post<any>('auth/login', {
                email: email,
                password: password
            });

            // Emitting new authenticated user
            onLogIn(token, userId);

            // Redirecting to Dashboard component
            history.push('/dashboard');
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
