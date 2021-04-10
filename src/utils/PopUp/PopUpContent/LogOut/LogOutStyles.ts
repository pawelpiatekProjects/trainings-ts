import styled from "styled-components";
import * as variables from "../../../../assets/styles/variables";

export const LogOutWrapper = styled.div`
  width: 100%;
`;

export const LogOutHeader = styled.h1`
  //font-weight: 400;
  width: 40%;
  border-bottom: 3px solid ${variables.yellowPrimary};
  padding-bottom: .5rem;
  margin-bottom: 4rem;
`;

export const LogOutParagraph = styled.p`
  margin-bottom: 4rem;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;