import styled from 'styled-components';
import * as variables from '../variables';


export const PrimaryButton = styled.button`
  padding:  1rem 2.5rem;
  background: ${props => props.color};
  font-size: ${variables.textMedium};
  font-weight: 500;
  
  border: none;
  position: relative;
  
  &:before {
    position: absolute;
    content: '';
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid ${variables.textColorPrimary};
    transition: all .3s;
  }

  &:hover::before{
    transform: scale(1.05);
  }
`;
