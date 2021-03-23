import styled from 'styled-components';
import * as variables from '../../assets/styles/variables';

export const SignUpWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SignUpLeft = styled.div`
  height: 100%;
  width: 55%;
  background: ${variables.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpLeftContent = styled.div`
  width: 100%;
   display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpRight = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${variables.yellowPrimary};
`;



