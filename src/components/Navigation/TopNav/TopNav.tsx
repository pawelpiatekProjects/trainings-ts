import React from 'react'
import {NavLink} from "react-router-dom";
import {TopNavWrapper, Navigation, NavigationItem, UserButton} from './TopNavStyles';
import {Face} from '@material-ui/icons';

interface Props {
    logOut: () => any
}

const TopNav: React.FC<Props> = ({logOut}) => {
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
            <UserButton onClick={() => logOut()}>
                <Face/>
            </UserButton>
        </TopNavWrapper>
    )
};

export default TopNav;
