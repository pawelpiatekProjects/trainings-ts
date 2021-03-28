import React from 'react';
import {NavLink, RouteComponentProps} from "react-router-dom";
import HeroImg from "./HeroImg";
import * as variables from '../../assets/styles/variables'

import {
    IntroWrapper,
    IntroLeft,
    IntroLeftContent,
    IntroLeftHeader,
    IntroLeftText,
    IntroLeftButton,
    IntroRight,
    SideButtons,
    SideButton,
    Separator
} from './IntroStyles';


interface Props extends RouteComponentProps {
}

const Intro: React.FC<Props> = ({history}) => {
    return (
        <IntroWrapper>
            <IntroLeft>
                <IntroLeftContent>
                    <IntroLeftHeader>Lorem ipsum</IntroLeftHeader>
                    <IntroLeftText>
                        Hello new user, you have come to the right place. We are glad you want to join our active
                        community. Just click the ‘Join Us’ button to start an incredible journey with us. In case you
                        have any questions, you are welcome to send us a message anytime you want. Let’s get started!
                    </IntroLeftText>
                    <IntroLeftButton
                        color={variables.yellowPrimary}
                        onClick={() => history.push('/sign-up')}
                    >
                        Join us
                    </IntroLeftButton>
                </IntroLeftContent>
            </IntroLeft>
            <IntroRight>
                <SideButtons>
                    <SideButton>
                        <NavLink to='sign-in'>Sign In</NavLink>
                    </SideButton>
                    <Separator>
                        <span>|</span>
                    </Separator>
                    <SideButton>
                        <NavLink to='sign-up'>Sign Up</NavLink>
                    </SideButton>
                </SideButtons>
                <HeroImg/>
            </IntroRight>

        </IntroWrapper>
    )
};

export default Intro;
