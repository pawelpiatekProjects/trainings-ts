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
`;

export const NavigationItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s;

  &:hover {
    background: ${variables.light};
    
    p, svg {
      color: ${variables.textColorPrimary};
    }

  }

  a {
    color: ${variables.light};
    transition: all .3s;
    text-decoration: none;

  }
`;

export const NavigationItemContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
  p {
    font-size: ${variables.textextraSmall};
    margin-left: .5rem;
  }
  
  svg {
    font-size: 2.5rem;
  }
`;
