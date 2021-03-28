import styled from 'styled-components';
import * as variables from '../../assets/styles/variables';
import {backdropZIndex} from "../../assets/styles/variables";

interface IWrapper {
    isOpen: boolean;
}

export const PopUpWrapper = styled.div<IWrapper>`
  display: ${props => props.isOpen ?  'block' : 'none'};
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background: ${variables.backdropRGBA};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${backdropZIndex};
`;

export const PopUpContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.light};
  width: 40%;
  padding: 3rem;
  height: 5rem;
  z-index: ${backdropZIndex + 1};
`;
