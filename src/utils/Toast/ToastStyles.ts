import styled from "styled-components";
import * as variables from '../../assets/styles/variables';

interface IToast {
    isOpen: boolean
}

export const ToastWrapper = styled.div<IToast>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  width: 20%;
  position: fixed;
  bottom: 3rem;
  left: 3rem;
  background: ${variables.backdropRGBA};
  padding: 2rem 2rem 2rem 4rem;
  z-index: ${variables.backdropZIndex};
  border-radius: 2rem;
`;

export const ToastMessage = styled.p`
  color: ${variables.light};
  margin: 0;
  font-size: ${variables.textSmall};

`;