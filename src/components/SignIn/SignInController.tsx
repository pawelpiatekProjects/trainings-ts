import React, {useContext} from 'react';
import SignIn from "./SignIn";
import * as Yup from 'yup';
import {onAddAuthorizationHeader, post} from '../../services/restService';
import {RouteComponentProps} from 'react-router-dom';
import {storeAuthenticatedUser} from '../../services/authenticationService';
import {ContentType, PopUpContext} from "../../contexts/PopUpContext";
import {LoaderContext} from "../../contexts/LoaderContext";
import {ErrorContext} from "../../contexts/ErrorContext";
import {AxiosError} from "axios";


interface Props extends RouteComponentProps{ }

const SignInController: React.FC<Props> = ({history}) => {

    const {onOpenModal} = useContext(PopUpContext);
    const {openLoader, closeLoader} = useContext(LoaderContext);
    const {handleErrorModalOpen} = useContext(ErrorContext);

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
            const error = e as AxiosError;
            handleErrorModalOpen({
                message: error.response!.data.message,
                isCancelButton: false
            });
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
