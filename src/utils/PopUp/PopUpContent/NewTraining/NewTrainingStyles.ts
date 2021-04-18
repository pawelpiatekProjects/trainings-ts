import styled from "styled-components";
import * as variables from '../../../../assets/styles/variables';


export const NewTrainingWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const NewTrainingHeader = styled.h1`
  border-bottom: 3px solid ${variables.yellowPrimary};
  padding-bottom: .5rem;
  width: 50%;
  margin-bottom: 3rem;
  height: 10%;
`;

export const ContentWrapper = styled.div`
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${variables.yellowPrimary};
  font-weight: 500;
  margin-bottom: 3rem;
  
  svg {
    font-size: 2.5rem;
    color: ${variables.yellowPrimary};
  }
`;

const TestAnimation = styled.div`
  
`;

