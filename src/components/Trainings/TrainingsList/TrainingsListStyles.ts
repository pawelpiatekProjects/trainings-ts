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
  height: 20%;
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

export const TrainingsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 80%;
`;



export const ListOfTrainings = styled.ul`
  width: 40%;
  height: 100%;
  overflow-y: auto;
  padding: 0 3rem;
`;

export const ListHeader = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: ${variables.light};
  border: 3px solid ${variables.yellowPrimary};
`;

export const ListHeaderItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: .5rem;
    font-size: 2rem;
    color: ${variables.textColorPrimary};
  }
  
  p{
    margin: 0;
    color: ${variables.textColorPrimary};
  }
  
`;

export const TrainingDataWrapper = styled.div`
  width: 60%;
  height: 100%;
`;

