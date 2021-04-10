import styled from "styled-components";
import * as variables from '../../../../assets/styles/variables';

interface ISeriesItem {
    width: number
}

export const TrainingWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  background: ${variables.grayPrimary};
  padding: 1rem;
`;

export const TrainingHeading = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const DropDownButton = styled.button`
  background: transparent;
  border: none;
  
  &:focus {
    outline: none;
  }
  
  svg {
    font-size: 3.5rem;
  }
`;

export const SeriesWrapper = styled.ul`
  background: ${variables.light};
  padding: 1rem;
`;

export const Series = styled.li`
  display: flex;
  align-items: center;
`;

export const SeriesContent = styled.div`
    width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SeriesItem = styled.div<ISeriesItem>`
  width: ${props => props.width}%;
`;



export const ButtonWrapper = styled.div`
  width: 10%;
  
  button {
    background: transparent;
    border: none;
    color: ${variables.yellowPrimary};
    font-weight: 700;
    font-size: ${variables.textMedium};
    
    &:focus {
      outline: none;
    }
  }
`;