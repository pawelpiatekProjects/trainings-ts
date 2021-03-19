import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const SideNavWrapper = styled.nav`

`;

const Navigation = styled.ul`

`;

const NavigationItem = styled.li`

`;

const SideNavLeft: React.FC = () => {
    return (
        <SideNavWrapper>
            <Navigation>
                <NavigationItem>
                    <NavLink to='/trainings/trainings-list'>Trainings List</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink to='/trainings/training-plans'>Training Plans</NavLink>
                </NavigationItem>
            </Navigation>
        </SideNavWrapper>
    )
};

export default SideNavLeft;
