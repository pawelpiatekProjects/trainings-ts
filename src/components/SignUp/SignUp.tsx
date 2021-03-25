import React from 'react';
import SignUpForm from "./SignUpForm/SignUpForm";
import {
    SignUpWrapper,
    SignUpLeft,
    SignUpLeftContent,
    SignUpRight
} from './SignUpStyles';
import SignInHeroImg from "../../utils/SignInHeroImg";



interface Props {
    validationSchema: any,
    handleSignUp: (name: string, lastName: string, userName: string, email: string, password: string) => void
}

const SignUp: React.FC<Props> = ({validationSchema, handleSignUp}) => {
    return (
        <SignUpWrapper>
            <SignUpLeft>
                <SignUpLeftContent>
                    <SignUpForm validationSchema={validationSchema} handleSignUp={handleSignUp}/>
                </SignUpLeftContent>
            </SignUpLeft>
            <SignUpRight>
                <SignInHeroImg/>
            </SignUpRight>
        </SignUpWrapper>
    )
};

export default SignUp;
