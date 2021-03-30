import styled from "styled-components";
import * as variables from '../../../../../../assets/styles/variables'

export const ExercisesWrapper = styled.ul`
  list-style: none;
  width: 80%;
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

