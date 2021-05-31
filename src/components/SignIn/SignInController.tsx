import React, {useContext} from 'react';
import SignIn from "./SignIn";
import * as Yup from 'yup';
import {onAddAuthorizationHeader, post} from '../../services/restService';
import {RouteComponentProps} from 'react-router-dom';
import {storeAuthenticatedUser} from '../../services/authenticationService';
import {ContentType, PopUpContext} from "../../contexts/PopUpContext";
import {LoaderContext} from "../../contexts/LoaderContext";


interface Props extends RouteComponentProps{ }

const SignInController: React.FC<Props> = ({history}) => {

    const {onOpenModal} = useContext(PopUpContext);
    const {openLoader, closeLoader} = useContext(LoaderContext);

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
        openLoader();

        try {
            const {data: {token, userId, refreshToken}} = await post<any>('auth/login', {
                email: email,
                password: password
            });

            // Emitting new authenticated user
            storeAuthenticatedUser(token, userId, refreshToken);

            // Redirecting to DashboardController component
            history.push('/dashboard');

            // Adding authorization token to header
            onAddAuthorizationHeader(token);
        } catch (e) {
            onOpenModal({
                contentType: ContentType.Error,
                message: 'Could not to sign in. Please check your email and password'
            })
        } finally {
            closeLoader();
        }
    }
    return (
        <>
           <SignIn validationSchema={SignInSchema} handleSignIn={onSignIn}/>
        </>
    )
};

export default SignInController;
