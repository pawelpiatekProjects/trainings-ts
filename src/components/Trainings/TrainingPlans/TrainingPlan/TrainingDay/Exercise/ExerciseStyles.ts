import styled from "styled-components";
import * as variables from '../../../../../../assets/styles/variables';
import {TopButton} from '../TrainingDayStyles';

interface IExerciseItem  {
    width: number;
}

export const ExercisesWrapper = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
`;

export const ExerciseButtons = styled.div`
  width: 15%;
  padding-left:  3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExerciseButton = styled(TopButton)`
    
`;

export const ExerciseItems = styled.ul`
  list-style: none;
  width: 85%;
  border-bottom: 2px solid ${variables.textColorTertiary};
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const ExerciseItem = styled.li<IExerciseItem>`
  display: flex;
  justify-content: start;
  align-items: center;
  width: ${props => props.width}%;
  
  p {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: ${variables.textColorPrimary};
    
    &:hover {
      svg {
        color: ${variables.ytRed};
      }
    }
    
    svg {
      font-size: 2.5rem;
      transition: all .3s;
    }
  }
  
  button {
    background: transparent;
    border: none;
    
    &:hover {
      svg {
        color: ${variables.yellowPrimary};
      }
    }
    
    
    &:focus {
      outline: none;
    }
    
    svg {
      font-size: 2.5rem;
      transition: all .3s;
    }
  }
`;



export const Empty = styled.div`
  width: 1rem;
  height: 2px;
  background: ${variables.yellowPrimary};
`;

