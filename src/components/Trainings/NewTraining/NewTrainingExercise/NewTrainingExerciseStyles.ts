import styled from "styled-components";
import * as variables from '../../../../assets/styles/variables';

interface IExerciseWrapper {
    isFinished: boolean;
}

interface ISeriesItem {
    width: number
}

interface ISeriesWrapper {
    isOpen: boolean;
}

interface IDropdownButton {
    isOpen: boolean
}

interface ISeriesContent {
    isFinished: boolean;
}

export const ExerciseWrapper = styled.div<IExerciseWrapper>`
  width: 90%;
  margin: 0 auto;
  background: ${variables.grayPrimary};
  padding: 1rem;

  opacity: ${props => props.isFinished ? .6 : 1};
  &:hover {
    cursor: ${props => props.isFinished ? 'not-allowed' : 'default'};
  }
`;

export const ExerciseHeading = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const DropDownButton = styled.button<IDropdownButton>`
  background: transparent;
  border: none;
  
  &:focus {
    outline: none;
  }
  
  svg {
    font-size: 3.5rem;
    transform: ${props => props.isOpen ? 'rotate(0)' : 'rotate(-90deg)'};
    transition: all .3s;
    
    &:hover {
      color: ${variables.yellowPrimary};
    }
  }
`;

export const SeriesWrapper = styled.ul<ISeriesWrapper>`
  background: ${variables.light};
  padding: 1rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
  transition: transform .3s;
  transform-origin: top;
  
  
`;

export const Series = styled.li`
  display: flex;
  align-items: start;
  
  
`;

export const SeriesContent = styled.div<ISeriesContent>`
    width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 1rem;
  
  opacity: ${props => props.isFinished ? .4 : 1};
  &:hover {
    cursor: ${props => props.isFinished ? 'not-allowed' : 'default'};
  }
`;

export const SeriesItem = styled.div<ISeriesItem>`
  width: ${props => props.width}%;
  
  p {
    margin: 0;
    margin-top: .5rem;
  }
  
  input {
    padding: .5rem;
    border: 2px solid ${variables.grayPrimary};
    
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 10%;
  padding: 1rem;
  
  button {
    background: transparent;
    border: none;
    color: ${variables.yellowPrimary};
    font-weight: 700;
    font-size: ${variables.textMedium};
    position: relative;
    
    &:focus {
      outline: none;
    }
    
    &:after {
      position: absolute;
      width: 110%;
      height: 2px;
      content: '';
      display: inline-block;
      background: ${variables.yellowPrimary};
      bottom: -.2rem;
      left: 0;
      
      transform: scaleX(0);
      transform-origin: left;
      transition: all .3s;
    }
    
    &:hover:after {
      transform: scaleX(1);
    }
    
   
  }
`;

