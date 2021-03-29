import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';

export const SideNavWrapper = styled.nav`
  width: 100%;
  height: 100%;
  background: ${variables.yellowPrimary};
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const Navigation = styled.ul`
  list-style: none;
  margin-top: 10rem;
`;

export const NavigationItem = styled.li`
  margin-bottom: 3rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  transition: all .3s;
  //background: ${variables.yellowPrimaryDarken};
  
  &:hover {
    background: ${variables.light};
    
    a{
      color: ${variables.textColorPrimary};
    }
  }
  a {
    color: ${variables.light};
    transition: all .3s;
    svg {
      font-size: 3rem;
    }
  }
`;

export const NavigationItemContent = styled.div`

`;
