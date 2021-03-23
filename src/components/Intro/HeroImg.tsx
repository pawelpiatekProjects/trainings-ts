import React, {useRef, useEffect} from 'react';
import gsap from "gsap";
import {ReactComponent as Img} from '../../assets/images/svg/home-hero.svg';
import styled from "styled-components";

const HeroImgWrapper = styled.div`
    height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
  height: 90%;
  }
`;

const HeroImg: React.FC = () => {

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
    })

        return (
        <HeroImgWrapper ref={wrapper}>
            <Img/>
        </HeroImgWrapper>
    )
};

export default HeroImg;
