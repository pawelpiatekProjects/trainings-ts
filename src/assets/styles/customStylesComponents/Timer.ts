import styled from "styled-components";
import * as variables from '../variables';

export const TimerWrapper = styled.div`
  width: 14rem;
  height: 14rem;
  border: 1.5rem solid ${variables.yellowPrimary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    font-weight: 500;
    font-size: ${variables.textExtraLarge};
  }
`;