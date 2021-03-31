import styled from 'styled-components';
import * as variables from '../../assets/styles/variables';
import {backdropZIndex} from "../../assets/styles/variables";
import {GlassmorphismContainer} from "../../components/Dashboard/DashboardStyles";

interface IWrapper {
    isOpen: boolean;
}

export const PopUpWrapper = styled.div<IWrapper>`
  display: ${props => props.isOpen ?  'block' : 'none'};
  
`;


export const PopUpContent = styled.div`
  max-height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.light};
  width: 40%;
  padding: 3rem;
  z-index: ${backdropZIndex + 1};
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
