import styled from "styled-components";
import * as variables from '../../../../../assets/styles/variables';

export const OpenedTrainingAlertWrapper = styled.div`
  width: 100%;
`;

export const OpenedTrainingAlertHeader = styled.h1`

  border-bottom: 3px solid ${variables.yellowPrimary};
  padding-bottom: .5rem;
  margin-bottom: 4rem;
`;

export const OpenedTrainingAlertParagraph = styled.p`
  margin-bottom: 4rem;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;