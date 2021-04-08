import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables'

export const TrainingPlansWrapper = styled.div`
  padding:  0 3rem 1rem 3rem;
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
  grid-template-columns: repeat(4, 1fr);
  width: 90%;
  margin: 3rem auto 0 auto;
  grid-gap: 3rem;
`;

export const TrainingPlansEmpty = styled.div`
  width: 80%;
  margin: 5rem auto 0 auto;
  height: 50%;
  border: 1px dashed ${variables.textColorTertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

