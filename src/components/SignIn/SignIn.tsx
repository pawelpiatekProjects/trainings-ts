import React from 'react';
import SignInForm from "./SignInForm/SignInForm";
import {
    SignInWrapper,
    SignInLeft,
    SignInRight,
    SignInRightContent
} from './SignInStyles';
import SignInHeroImg from "../../utils/SignInHeroImg";

interface Props {
    validationSchema: any,
    handleSignIn: (email: string, password: string) => void
}

const SignIn: React.FC<Props> = ({validationSchema, handleSignIn}) => {
    return (
        <SignInWrapper>
            <SignInLeft>
                <SignInHeroImg/>
            </SignInLeft>
            <SignInRight>
                <SignInRightContent>
                    <SignInForm validationSchema={validationSchema} handleSignIn={handleSignIn}/>
                </SignInRightContent>
            </SignInRight>
        </SignInWrapper>
    )
};

export default SignIn;
