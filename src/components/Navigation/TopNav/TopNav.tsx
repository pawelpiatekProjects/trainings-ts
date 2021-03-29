import React from 'react'
import {NavLink} from "react-router-dom";
import {TopNavWrapper, Navigation, NavigationItem, UserButton} from './TopNavStyles';
import {Face} from '@material-ui/icons';
import * as variables from '../../../assets/styles/variables';

interface Props {
    logOut: () => any;
}

const TopNav: React.FC<Props> = ({logOut}) => {

    const activeStyle = {
        color:  variables.yellowPrimary
    }
    return (
        <TopNavWrapper>
            <Navigation>
                <NavigationItem>
                    <NavLink activeStyle={activeStyle} to='/dashboard'>Dashboard</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink activeStyle={activeStyle} to='/trainings'>Trainings</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink activeStyle={activeStyle} to='/calendar'>Calendar</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink activeStyle={activeStyle} to='/statistics'>Statistics</NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink activeStyle={activeStyle} to='/exercises'>Exercises</NavLink>
                </NavigationItem>
            </Navigation>
            <UserButton onClick={() => logOut()}>
                <Face/>
            </UserButton>
        </TopNavWrapper>
    )
};

export default TopNav;
