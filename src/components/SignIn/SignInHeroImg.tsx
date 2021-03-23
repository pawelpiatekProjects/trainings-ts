import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import {ReactComponent as HeroImg} from '../../assets/images/svg/sign-hero.svg';

const HeroImgWrapper = styled.div`
  height: 100%;
  
  svg {
    transform: scale(1.3);
  }
`;

const SignInHeroImg: React.FC = () => {
    const wrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements: HTMLDivElement = wrapper.current!;

        const body = elements.querySelector('#body');
        const circleFront = elements.querySelector('#bar-circle-front');
        const bar = elements.querySelector('#bar');
        const barLines = elements.querySelector('#bar-lines');



        gsap.set([body, circleFront, bar, barLines], {autoAlpha: 0});
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});




        tl.fromTo(body,{},  {duration: 1.5,  autoAlpha: 1})
            .fromTo(bar , {},{ease:'power3.inOut',  duration: 1.5,  autoAlpha: 1, scaleY: 1}, '-=1.5')
            .fromTo(barLines, {scaleY: .85}, {ease:'power3.inOut', duration: .4, autoAlpha: 1, scaleY: 1})
            .fromTo(circleFront, {scaleY: .85}, {ease:'power3.inOut', duration: .4, autoAlpha: 1, scaleY: 1}, '-=.4')

    }, [])

    return (
        <HeroImgWrapper ref={wrapper}>
            <HeroImg/>
        </HeroImgWrapper>
    )
};

export default SignInHeroImg;
