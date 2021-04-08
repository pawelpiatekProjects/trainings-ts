import styled from "styled-components";
import * as variables from '../../../../../assets/styles/variables';

export const TrainingDaysWrapper = styled.div`

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