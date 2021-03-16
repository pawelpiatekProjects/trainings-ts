import React from 'react';
import styled from 'styled-components';
import SignUpForm from "./SignUpForm";

const SignUpWrapper = styled.div`

`;

interface Props {
    validationSchema: any,
    handleSignUp: (name: string, lastName: string, email: string, password: string) => void
}

const SignUp: React.FC<Props> = ({validationSchema, handleSignUp}) => {
    return (
        <SignUpWrapper>
            <SignUpForm validationSchema={validationSchema} handleSignUp={handleSignUp}/>
        </SignUpWrapper>
    )
};

export default SignUp;
