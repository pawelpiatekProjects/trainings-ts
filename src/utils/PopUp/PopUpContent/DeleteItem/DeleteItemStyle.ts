import styled from "styled-components";
import {PrimaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../../assets/styles/variables';

export const DeleteItemWrapper = styled.div`
    width: 100%;
`;

export const DeleteItemHeader = styled.h1`
  //font-weight: 400;
  width: 40%;
  border-bottom: 3px solid ${variables.yellowPrimary};
  padding-bottom: .5rem;
  margin-bottom: 4rem;
`;

export const DeleteItemParagraph = styled.p`
  margin-bottom: 4rem;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(PrimaryButton)`

`;

