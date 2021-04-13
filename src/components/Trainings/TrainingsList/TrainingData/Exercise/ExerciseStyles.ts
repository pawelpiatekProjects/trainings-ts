import styled from "styled-components";
import * as variables from '../../../../../assets/styles/variables';

interface IIsOpen{
    isOpen: boolean;
}


export const ExerciseWrapper = styled.li`
`;

export const ExerciseContent = styled.div<IIsOpen>`
  background: ${props => props.isOpen ? variables.yellowPrimary : variables.grayPrimary};
  color: ${props => props.isOpen ? variables.light : variables.textColorPrimary};
  padding: 1rem;
  margin-top: .5rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all .3s;
  p {
    margin: 0 1rem 0 0 ;

    transition: all .3s;
  }

  &:hover {
    cursor: pointer;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-.5rem)'};

    p {
      color: ${props => props.isOpen ? variables.textColorPrimary : variables.light};
    }
  }

  &:before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    display: inline-block;
    background: ${props => props.isOpen ? variables.grayPrimary : variables.yellowPrimary};
    transform-origin: left;
    transform: scaleX(.01);

    transition: all .4s;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;

export const SeriesWrapper = styled.ul<IIsOpen>`
  width: 100%;
  margin: 0 auto;
  border-left: 4px solid ${variables.yellowPrimary};
  border-right: 4px solid ${variables.yellowPrimary};
  border-bottom: 4px solid ${variables.yellowPrimary};
  
  display: ${props => props.isOpen ? 'inline-block' : 'none'};
  
`;

export const SeriesItem = styled.li`
  width: 100%;
  border-bottom: 1px dashed ${variables.thirdGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${variables.grayPrimary};
  padding: 1rem 2rem;

`;

export const SeriesItemContent = styled.p`
  margin: 0;
`;

export const SeriesItemContentHeader = styled(SeriesItemContent)`
  font-weight: 500;
`;