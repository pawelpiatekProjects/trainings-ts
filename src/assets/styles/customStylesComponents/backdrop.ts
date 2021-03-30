import styled from 'styled-components';
import * as variables from '../../styles/variables';


export const Backdrop = styled.div`
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
