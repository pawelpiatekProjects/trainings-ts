import React from 'react'
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const TopNavWrapper = styled.nav`
width: 100%;
padding: 3rem;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationItem = styled.li`

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
