import styled from "styled-components";
import * as variables from '../../../assets/styles/variables';

export const TrainingsListWrapper = styled.div`
  padding:  0 3rem 1rem 3rem;
  height: 100%;
`;

export const TrainingsListHeading = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const TrainingsListHeader = styled.h1`
  font-weight: 400;
  font-size: ${variables.textHeader};
  margin-right: 5rem;
`;

export const TrainingsListEmpty = styled.div`
  width: 80%;
  margin: 5rem auto 0 auto;
  height: 50%;
  border: 1px dashed ${variables.textColorTertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;