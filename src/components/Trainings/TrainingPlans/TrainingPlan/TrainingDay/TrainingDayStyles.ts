import styled from "styled-components";
import * as variables from '../../../../../assets/styles/variables';
import {PrimaryButton} from '../../../../../assets/styles/customStylesComponents/buttons';

interface IExerciseIntroItem {
    width: number;
}

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
  width: 80%;
  text-align: center;
  font-weight: 400;
`;

export const TopButtons = styled.div`
  width: 20%;
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

export const EmptyExercisesWrapper = styled.div`
  width: 100%;
  border: 1px dashed ${variables.textColorTertiary};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyExercisesHeader = styled.h1`
  color: ${variables.textColorTertiary};
`;

export const Button = styled(PrimaryButton)`

`;

export const ExerciseIntro = styled.ul`
  list-style: none;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ExerciseIntroItem = styled.li<IExerciseIntroItem>`
  width: ${props => props.width}%;
  
  p {
    font-weight: 500;
  }
`;


