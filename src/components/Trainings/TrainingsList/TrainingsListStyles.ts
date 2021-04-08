import styled from "styled-components";
import * as variables from '../../../assets/styles/variables';

export const TrainingsListWrapper = styled.div`
  padding:  0 3rem 1rem 3rem;
  height: 100%;
`;

export const TrainingPlansHeading = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const TrainingPlansHeader = styled.h1`
  font-weight: 400;
  font-size: ${variables.textHeader};
  margin-right: 5rem;
`;