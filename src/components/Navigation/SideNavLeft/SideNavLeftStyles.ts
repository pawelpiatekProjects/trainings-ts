import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';
import {NavLink} from 'react-router-dom';

interface INestedNavItems {
    isActive: boolean
}

export const SideNavWrapper = styled.nav`
  width: 100%;
  height: 100%;
  background: ${variables.yellowPrimary};
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const Navigation = styled.div`
  
  margin-top: 10rem;
  width: 100%;
  height: calc(100% - 10rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const NavigationTop = styled.ul`
  list-style: none;
`;

export const NavigationBottom = styled.ul`
  list-style: none;
  padding-bottom: 3rem;
`;

export const NavigationItem = styled.li`
  margin-top: 1rem;
  transition: all .3s;
  
  a {
    width: 100%;
    text-align: center;
    color: ${variables.light};
    transition: all .3s;
    text-decoration: none;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 1.5rem;

    &:hover {
      background: ${variables.light};

      p, svg {
        color: ${variables.textColorPrimary};
      }

    }

  }
`;

export const NavigationItemContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  p {
    font-size: ${variables.textSmall};
    margin-left: .5rem;
    font-weight: 500;
  }

  svg {
    font-size: 2.5rem;
  }
`;


export const NestedNavItems = styled.ul<INestedNavItems>`
  border-top: 1px solid ${variables.graySecondary};
  list-style: none;
  background: ${variables.light};
  display: ${props => props.isActive ? 'flex' : 'none'};
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: .5rem 0 .5rem 1rem;
`;

export const NestedNavItem = styled.li`
  width: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: .75rem;
`;

export const NestedNavLink = styled(NavLink)`
  text-decoration: none;
  transition: all .3s;
  display: flex;
  align-items: center;
  
  p {
    margin: 0;
    font-size: ${variables.textSmall};
    color: ${variables.textColorTertiary};
  }
  
  svg {
    color: ${variables.textColorTertiary};
  }

  &:hover {
    color: ${variables.textColorPrimary};
  }

`;

