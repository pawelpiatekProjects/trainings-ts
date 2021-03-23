import styled from "styled-components";
import * as variables from "../../assets/styles/variables";
import {PrimaryButton} from "../../assets/styles/customStylesComponents/buttons";

export const IntroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const IntroLeft = styled.div`
 background: ${variables.light};
 width: 55%;
 height: 100%;
 display: flex;
 justify-content: start;
 align-items: center;
 padding: 6rem;
`;

export const IntroLeftContent = styled.div`
  width: 70%;
`;

export const IntroLeftHeader = styled.h1`
  font-weight: 500;
  font-size: ${variables.textHeader};
  letter-spacing: 1.5px;
`;

export const IntroLeftText = styled.p`
  word-spacing: .3rem;
`;

export const IntroLeftButton = styled(PrimaryButton)`
  margin-top: 2rem;
`;

export const IntroRight = styled.div`
position: relative;
  width: 45%;
  height: 100%;
  background: ${variables.yellowPrimary};
`;

export const SideButtons = styled.ul`
position: absolute;
top: 2rem;
right: 2rem;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const SideButton = styled.li`
 
  a {
    text-decoration: none;
    font-size: ${variables.textSmall};
    color: ${variables.textColorPrimary};
    transition: all .5s;
    
    &:hover {
      color: ${variables.light};
    }
  }
`;

export const Separator = styled.li`
   margin: 0 .5rem;
  font-weight: 500;
`;
