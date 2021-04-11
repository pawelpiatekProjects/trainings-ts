import styled from "styled-components";
import * as variables from '../../../../assets/styles/variables';

export const FinishTrainingWrapper = styled.div`
  width: 100%;
`;

export const FinishTrainingHeader = styled.h1`
  width: 40%;
  border-bottom: 3px solid ${variables.yellowPrimary};
  padding-bottom: .5rem;
  margin-bottom: 4rem;
`;

export const FinishedTrainingParagraph = styled.p`
  margin-bottom: 4rem;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
