import styled from "styled-components";
import * as variables from '../../assets/styles/variables';

export const SignInWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SignInLeft = styled.div`
  height: 100%;
  width: 45%;
  background: ${variables.yellowPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroWrapper = styled.div`
`;

export const SignInRight = styled.div`
  height: 100%;
  width: 55%;
  background: ${variables.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInRightContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

