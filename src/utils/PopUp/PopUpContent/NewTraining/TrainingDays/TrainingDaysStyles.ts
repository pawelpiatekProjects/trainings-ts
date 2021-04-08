import styled from "styled-components";
import * as variables from '../../../../../assets/styles/variables';

interface IWrapper {
    isActive: boolean
}

export const TrainingDaysWrapper = styled.div<IWrapper>`
  transform: ${props => props.isActive ? 'translateX(0) scaleY(1)' : 'translateX(-100rem) scaleY(0)'} ;
  max-height: ${props => props.isActive ? '100%' : '0'};
  width: 80%;
  margin: 0 auto;
  transition: transform .4s;
`;

export const TrainingDaysList = styled.ul`
  list-style: none;
  width: 100%;
`;

export const TrainingDayItem = styled.li`
  margin: 1rem 0;
  background: ${variables.grayPrimary};
  width: 100%;
  padding: 1rem;
  transition: all .3s;

  p {
    margin: 0;
  }

  &:hover {
    background: ${variables.yellowPrimary};
    color: ${variables.light};
    cursor: pointer;
  }
`;

export const EmptyTrainingDays = styled.p`

`;