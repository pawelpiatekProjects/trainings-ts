import React from 'react';
import styled from 'styled-components';
import SignInForm from "./SignInForm";
import * as Yup from 'yup';

const SignInWrapper = styled.div`

`;

interface Props {
    validationSchema: any,
    handleSignIn: (email: string, password: string) => void
}

const SignIn: React.FC<Props> = ({validationSchema, handleSignIn}) => {
    return (
        <SignInWrapper>
            <p>sign In</p>
            <SignInForm validationSchema={validationSchema} handleSignIn={handleSignIn}/>
        </SignInWrapper>
    )
};

export default SignIn;
