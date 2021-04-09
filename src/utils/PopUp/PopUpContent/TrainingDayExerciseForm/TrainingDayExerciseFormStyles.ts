import styled from "styled-components";

import * as variables from '../../../../assets/styles/variables';

interface IMoreInfo {
    isOpen: boolean;
}

export const FormWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const MoreInfoButton = styled.button<IMoreInfo>`
  
  background: transparent;
  border: none;
  position: relative;
  
  &:focus {
    outline: none;
  }
  
  svg {
    font-size: 2rem!important;
    color: ${props => props.isOpen ? variables.yellowPrimary : variables.textColorTertiary};
    transition: all .3s;
    &:hover {
      color: ${variables.yellowPrimary}!important;
    }
  }
  
  &:after {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: absolute;
    content: 'Reps in series separated by ","';
    text-align: left;
    padding: 2rem;
    width: 20rem;
    left: 0;
    top: 0;
    transform: translate(-100%, -100%);
    background: ${variables.light};
    border: 2px solid ${variables.yellowPrimary};
    border-radius: 1rem;
    box-shadow: 0 0 9px -2px #333;
  }
  
  
  
`;

export const InfoPrompt = styled.p`
  position: absolute;
  top: -7rem;
  right: 2.5rem;
  background: ${variables.light};
  padding: 1rem;
  border: 2px solid ${variables.yellowPrimary};
`;
