import React, {useRef, useEffect} from 'react';
import {NavLink, RouteComponentProps} from "react-router-dom";
import gsap from "gsap";
import {ReactComponent as HeroImg} from '../../assets/images/svg/home-hero.svg';
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
    Separator,
    HeroImgWrapper
} from './IntroStyles';


interface Props extends RouteComponentProps {
}

const Intro: React.FC<Props> = ({history}) => {
    const wrapper = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const elements: HTMLDivElement = wrapper.current!;

        const lines = elements.querySelector('#lines');
        const body = elements.querySelector('#body');

        gsap.set([body, lines], {autoAlpha: 0});
        gsap.set(lines, {transformOrigin: '50% 50%'});


        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});

        tl.fromTo(body, {x: '-=80'}, {duration: 1, x: '+=80', autoAlpha: 1})
            .fromTo(lines, {scaleY: .85}, {ease: 'power3.inOut', duration: .4, autoAlpha: 1, scaleY: 1})

    }, [])
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
                <HeroImgWrapper ref={wrapper}>
                    <HeroImg/>
                </HeroImgWrapper>
            </IntroRight>

        </IntroWrapper>
    )
};

export default Intro;
