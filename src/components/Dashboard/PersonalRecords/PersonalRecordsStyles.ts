import styled from 'styled-components';
import * as variables from "../../../assets/styles/variables";
import {DashboardHeader, GlassmorphismContainer} from "../DashboardStyles";

export const PersonalRecordsWrapper = styled(GlassmorphismContainer)`
  width: 40%;
  padding: 3rem;
`;

export const PersonalRecordsHeader = styled(DashboardHeader)`
  width: 20%;
`;

export const PersonalRecordsContent = styled.ul`
  list-style: none;
  margin-left: 2rem;
  margin-top: 1.5rem;
`;



export const PersonalRecord = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const PersonalRecordData = styled(PersonalRecord)`
  
    p {
      width: 30%;
      font-weight: 500;
      color: ${variables.textColorTertiary};
      font-size: ${variables.textMedium};
      display: flex;
      align-items: center;
      justify-content: start;
      
      
      svg {
      font-size: ${variables.textLarge};
      margin-right: .3rem;
      }
    }
    p:first-child {
      width: 40%;
    }
`;

export const PersonalRecordName = styled.p`
  font-weight: 500;
  width: 40%;
  font-size: ${variables.textSmall};
`;

export const PersonalRecordValue = styled.p`
  font-weight: 500;
  color: ${variables.yellowPrimary};
  width: 30%;
  font-size: ${variables.textSmall};
`;

export const PersonalRecordDate = styled.p`
  width: 30%;
  font-size: ${variables.textMedium};
`;


