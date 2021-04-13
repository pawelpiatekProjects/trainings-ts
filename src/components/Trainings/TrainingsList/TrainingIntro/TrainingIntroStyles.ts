import styled from "styled-components";
import * as variables from '../../../../assets/styles/variables';

interface IIsOpen {
    isOpen: boolean;
}


export const TrainingWrapper = styled.li<IIsOpen>`
  list-style: none;
  width: 100%;
  background: ${props => props.isOpen ? variables.yellowPrimary : variables.light};
  padding: 2rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  
  p {
    margin: 0;
    color: ${props=> props.isOpen ? variables.light : variables.textColorPrimary};

    transition: all .5s;
  }
  
  

  &:hover {
    cursor: pointer;
    
    p {
      color: ${props => props.isOpen ? variables.textColorPrimary :variables.light};
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${props => props.isOpen ? variables.light : variables.yellowPrimary};
    display: inline-block;
    z-index: -1;
    transform: scaleX(.01);
    transform-origin: left;
    
    transition: all .5s;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
`;

export const TrainingWrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

