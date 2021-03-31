import styled from "styled-components";
import * as variables from '../../../../../../assets/styles/variables';
import {TopButton} from '../TrainingDayStyles';

export const ExercisesWrapper = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  
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

export const ExerciseItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  
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

