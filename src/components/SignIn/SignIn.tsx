import React from 'react';
import SignInForm from "./SignInForm/SignInForm";
import {
    SignInWrapper,
    SignInLeft,
    SignInRight,
    SignInRightContent,
    HeroWrapper
} from './SignInStyles';
import SignInHeroImg from "./SignInHeroImg";

interface Props {
    validationSchema: any,
    handleSignIn: (email: string, password: string) => void
}

const SignIn: React.FC<Props> = ({validationSchema, handleSignIn}) => {
    return (
        <SignInWrapper>
            <SignInLeft>
                <HeroWrapper>
                    <SignInHeroImg/>
                </HeroWrapper>
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
