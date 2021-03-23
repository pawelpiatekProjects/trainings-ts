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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique, nibh eu suscipit
                        maximus, leo nulla facilisis lacus, sit amet pellentesque magna dui et erat. Integer ligula
                        nisl, dapibus eu rhoncus tincidunt, dignissim ut lorem.
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
