import styled from "styled-components";
import * as variables from '../../../../../assets/styles/variables';

export const TrainingDayWrapper = styled.div`
  background: ${variables.grayPrimary};
  padding: 2rem;
  margin-bottom: 3rem;
`;

export const TrainingDayHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrainingDayHeader = styled.h1`
  width: 90%;
  text-align: center;
  font-weight: 400;
`;

export const TopButtons = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopButton = styled.button`
  background: transparent;
  border: none;
  font-weight: 500;
  transition: all .3s;
  
  &:hover {
    color: ${variables.yellowPrimary};
  }
  
  &:focus {
    outline: none;
  }
`;

export const ExercisesWrapper = styled.div`
  background: ${variables.light};
  padding: 2rem;
`;

