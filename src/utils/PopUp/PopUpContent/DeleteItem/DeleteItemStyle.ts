import styled from "styled-components";
import {PrimaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../../assets/styles/variables';

export const DeleteExerciseWrapper = styled.div`
    width: 100%;
`;

export const DeleteExerciseHeader = styled.h1`
  //font-weight: 400;
  width: 30%;
  border-bottom: 3px solid ${variables.yellowPrimary};
  padding-bottom: .5rem;
  margin-bottom: 4rem;
`;

export const DeleteExerciseParagraph = styled.p`
  margin-bottom: 4rem;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(PrimaryButton)`

`;

