import styled from "styled-components";
import * as variables from '../../../assets/styles/variables';

export const NewTrainingWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  background: ${variables.light};
  height: 100vh;
`;

export const Heading = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  border-bottom: 1px dashed ${variables.textColorTertiary};
  height: 30%;
`;

export const HeadingContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const HeadingItem = styled.div`

`;

export const PlanName = styled.h1`
  font-weight: 500;
  
  span {
    font-weight: 700;
    color: ${variables.yellowPrimary};
  }
`;

export const DayName = styled.h2`
  font-weight: 500;

  span {
    font-weight: 700;
    color: ${variables.yellowPrimary};
  }
`;

export const ExercisesParagraph = styled.p`
  font-weight: 500;
  
  span {
    font-weight: 700;
    color: ${variables.yellowPrimary};
  }
`;



export const Exercises = styled.div`
  padding: 3rem 0;
  height: 70%;
  overflow-y: scroll;
`;

