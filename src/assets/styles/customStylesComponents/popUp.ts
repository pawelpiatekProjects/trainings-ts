import styled from 'styled-components';
import * as variables from '../variables'

interface IWrapper {
    isOpen: boolean;
}

export const PopUpWrapper = styled.div`
  transition: all .4s;
`;


export const PopUpContent = styled.div<IWrapper>`
  transform: ${props => props.isOpen ? 'translate(-50%, -50%);' : 'translate(-50%, -500rem)'};
  transition: all .4s;
  max-height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  //transform: translate(-50%, -50%);
  background: ${variables.light};
  width: 40%;
  padding: 3rem;
  z-index: ${variables.backdropZIndex + 1};
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: ${variables.dashboardItemBoxShadow};
  
  svg {
    font-size: 4rem;
    color: ${variables.errorRed};
  }
  

`;

export const PopUpText = styled.p`
  margin-left: 3rem;
  font-size: ${variables.textLarge};
  color: ${variables.textColorTertiary};
  font-weight: 500;
`;
