import styled from 'styled-components';
import * as variables from '../../assets/styles/variables';

interface IBottomRow {
    isOpen: boolean;
}

export const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    color: ${variables.yellowPrimary};
  }
`;

export const ErrorHeader = styled.h1`
  text-align: center;
  color: ${variables.textColorTertiary};
`;

export const ErrorMessage = styled.p`

`;

export const BottomRow = styled.div<IBottomRow>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  margin-top: 3rem;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;