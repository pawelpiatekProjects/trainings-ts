import React, {useContext} from 'react';
import SignIn from "./SignIn";
import * as Yup from 'yup';
import {post} from '../../services/restService';
import { RouteComponentProps} from 'react-router-dom';
import {storeAuthenticatedUser} from '../../services/authenticationService';
import {onAddAuthorizationHeader} from '../../services/restService';
import {PopUpContext} from "../../contexts/PopUpContext";


interface Props extends RouteComponentProps{ }

const SignInController: React.FC<Props> = ({history}) => {

    const {onOpenModal} = useContext(PopUpContext);

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
            storeAuthenticatedUser(token, userId);

            // Redirecting to DashboardController component
            history.push('/dashboard');

            // Adding authorization token to header
            onAddAuthorizationHeader(token);
        } catch (e) {
            console.log('Error: ', e)
            // TODO: add fetching http errors
            onOpenModal('Could not to sign in. Please check your email and password');
        }
    }
    return (
        <>
           <SignIn validationSchema={SignInSchema} handleSignIn={onSignIn}/>
        </>
    )
};

export default SignInController;
