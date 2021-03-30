import styled from "styled-components";
import * as variables from '../../../assets/styles/variables';

export const TopNavWrapper = styled.nav`
width: 100%;
padding: 1.5rem;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const NavigationItem = styled.li`
  margin: 0 4rem;
  position: relative;
  
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -.5rem;
    background: ${variables.yellowPrimary};
    transform: scaleX(0);
    transition: all .3s;
    transform-origin: left;
  }
  
  
  a {
    text-decoration: none;
    font-size: ${variables.textMedium};
    font-weight: 500;
    color: ${variables.textColorPrimary};
    transition: all .3s;
  }
  
  &:hover {
    a{
      color: ${variables.yellowPrimary};
    }
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const UserButton = styled.button`
  background: transparent;
  border: none;
  
  &:focus {
    outline: none;
    border: none;
  }
  
  &:hover {
    svg {
      color: ${variables.yellowPrimary};
    }
  }
  
  svg {
    font-size: 4rem;
    color: ${variables.textColorTertiary};
    transition: all .3s;
  }
  
`;
