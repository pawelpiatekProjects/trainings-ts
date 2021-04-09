import styled from 'styled-components';
import * as variables from '../../styles/variables';

interface IBackdrop {
    isOpen?: boolean
}


export const Backdrop = styled.div<IBackdrop>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  width: 100%;
  height: 100vh;
  background: ${variables.backdropRGBA};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${variables.backdropZIndex};

  &:hover {
    cursor: pointer;
  }
`;
