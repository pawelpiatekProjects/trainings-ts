import React, {useContext} from 'react';
import SignUp from "./SignUp";
import * as Yup from 'yup';
import {post} from '../../services/restService';
import {RouteComponentProps} from "react-router-dom";
import {LoaderContext} from "../../contexts/LoaderContext";
import {ContentType, PopUpContext} from "../../contexts/PopUpContext";
import {AxiosError} from "axios";
import {ErrorContext} from "../../contexts/ErrorContext";

interface Props extends RouteComponentProps{ }

const SignUpController: React.FC<Props> = ({history}) => {

    const {openLoader, closeLoader} = useContext(LoaderContext);
    const {onOpenModal} = useContext(PopUpContext);
    const {handleErrorModalOpen} = useContext(ErrorContext);

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
        openLoader();
        try {
            const response = await post<any>('auth/signup', {
                email: email,
                name: lastName,
                lastName: lastName,
                userName: userName,
                password: password
            });

            console.log(response);
            onOpenModal({
                contentType: ContentType.CreatedAccount
            });
        } catch (e) {
            const error = e as AxiosError;
            console.log('Error: ', error.response);
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
            <SignUp validationSchema={SignUpSchema} handleSignUp={onSignUp}/>
        </>
    )
};

export default SignUpController;
