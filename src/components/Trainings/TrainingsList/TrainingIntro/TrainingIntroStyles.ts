import styled from "styled-components";
import * as variables from '../../../../assets/styles/variables';


export const TrainingWrapper = styled.li`
  list-style: none;
  width: 100%;
  background: ${variables.light};
  padding: 2rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  
  
  //border-left: 4px solid ${variables.yellowPrimary};

  &:hover {
    cursor: pointer;
    
    p {
      color: ${variables.light};
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${variables.yellowPrimary};
    display: inline-block;
    z-index: -1;
    transform: scaleX(.01);
    transform-origin: left;
    
    transition: all .3s;
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

export const TrainingItem = styled.p`
  margin: 0;
  color: ${variables.textColorPrimary};

  transition: all .3s;
`;