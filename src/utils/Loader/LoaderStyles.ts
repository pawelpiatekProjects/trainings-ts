import styled from "styled-components";
import * as variables from '../../assets/styles/variables';

interface ILoaderWrapper {
    isOpen: boolean;
}

export const LoaderWrapper = styled.div<ILoaderWrapper>`
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

export const LoaderContent = styled.div`
  max-height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${variables.backdropZIndex + 1};
  display: flex;
  justify-content: start;
  align-items: center;
`;