import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables'

export const TrainingPlansWrapper = styled.div`
  padding:  0 3rem 3rem 3rem;
  overflow-y: scroll;
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

export const TrainingPlansList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: 3rem auto 0 auto;
  grid-gap: 3rem;
`;

