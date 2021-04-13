import styled from "styled-components";
import * as variables from '.././../../../assets/styles/variables';


export const TrainingDataWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;

export const TrainingNotSelected = styled.div`
  padding: 8rem 5rem;
  border: 1px dashed ${variables.textColorTertiary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotSelectedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  svg {
    color: ${variables.textColorTertiary};
    font-size: 7rem;
  }
  
  h1 {
    color: ${variables.textColorTertiary};
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  background: ${variables.light};
  padding: 3rem;
  max-height: 90%;
  
  overflow-y: auto;
`;

export const DetailsDate = styled.h1`
  color: ${variables.textColorTertiary};
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
`;

export const DetailsHeader = styled.h1`
  color: ${variables.textColorTertiary};
  font-weight: 400;
  
  span {
    font-weight: 500;
    color: ${variables.yellowPrimary};
  }
`;

export const ExercisesHeader = styled.h1`
  color: ${variables.textColorTertiary};
  font-weight: 400;
  margin-top: 3rem;
  border-bottom: 3px solid ${variables.yellowPrimary};
  width: 20%;
  padding-bottom: .5rem;
`;

export const Exercises = styled.ul`
  list-style: none;
  width: 100%;
`;

export const Exercise = styled.li`
  background: ${variables.grayPrimary};
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
    transform: translateX(-.5rem);
    
    p {
      color: ${variables.light};
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
    background: ${variables.yellowPrimary};
    transform-origin: left;
    transform: scaleX(.01);
    
    transition: all .4s;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
`;





