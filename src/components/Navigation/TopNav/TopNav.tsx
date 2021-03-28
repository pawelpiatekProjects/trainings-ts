import React from 'react'
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

import * as variables from '../../../assets/styles/variables';

const TopNavWrapper = styled.nav`
width: 100%;
padding: 3rem;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const NavigationItem = styled.li`
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

const TopNav: React.FC = () => {
    return (
        <TopNavWrapper>
            <Navigation>
                <NavigationItem>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink to='/trainings'>Trainings</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink to='/calendar'>Calendar</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink to='/statistics'>Statistics</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink to='/exercises'>Exercises</NavLink>
                </NavigationItem>
            </Navigation>
        </TopNavWrapper>
    )
};

export default TopNav;
