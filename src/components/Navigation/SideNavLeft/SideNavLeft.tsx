import React, {useContext, useState, useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {
    Navigation,
    NavigationBottom,
    NavigationItem,
    NavigationItemContent,
    NavigationTop,
    NestedNavItem,
    NestedNavItems,
    NestedNavLink,
    SideNavWrapper
} from './SideNavLeftStyles';
import {
    CalendarToday,
    Dashboard,
    Face,
    FitnessCenter,
    Folder,
    KeyboardArrowRight,
    Settings,
    TrendingUp
} from '@material-ui/icons';
import {LogoutOutlined} from '@ant-design/icons'
import * as variables from "../../../assets/styles/variables";
import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";
import {TrainingsContext} from "../../../contexts/TrainingsContext";


const SideNavLeft: React.FC = () => {
    const location = useLocation().pathname.split('/')[1];
    const {onOpenModal} = useContext(PopUpContext);
    const {activeTraining} = useContext(TrainingsContext);

    console.log('location: ', location === 'trainings');

    const handleLogOut = () => {
        console.log('log out');
        onOpenModal({
            contentType: ContentType.LogOut
        })
    }

    const activeStyle = {
        color: variables.textColorPrimary,
        background: variables.light
    }

    const activeStyleNested = {
        color: variables.textColorPrimary,
    }
    return (
        <SideNavWrapper>
            <Navigation>
                <NavigationTop>
                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/dashboard'>
                            <NavigationItemContent>
                                <Dashboard/>
                                <p>Dashboard</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>

                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/trainings'>
                            <NavigationItemContent>
                                <FitnessCenter/>
                                <p>Trainings</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                    {/*Nested menu - only on active page*/}
                    <NestedNavItems isActive={location === 'trainings'}>
                        <NestedNavItem>
                            <NestedNavLink activeStyle={activeStyleNested} to='/trainings/trainings-list'>
                                <KeyboardArrowRight/>
                                <p>Trainings List</p>
                            </NestedNavLink>
                        </NestedNavItem>
                        <NestedNavItem>
                            <NestedNavLink activeStyle={activeStyleNested} to='/trainings/training-plans'>
                                <KeyboardArrowRight/>
                                <p>Training Plans</p>
                            </NestedNavLink>
                        </NestedNavItem>
                        {/*// ToDO: fixed this*/}
                        {Object.keys(activeTraining).length > 0 ? (<NestedNavItem>
                            <NestedNavLink activeStyle={activeStyleNested} to='/trainings/new'>
                                <KeyboardArrowRight/>
                                <p>Active training</p>
                            </NestedNavLink>
                        </NestedNavItem>) : null}
                    </NestedNavItems>

                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/calendar'>
                            <NavigationItemContent>
                                <CalendarToday/>
                                <p>Calendar</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/statistics'>
                            <NavigationItemContent>
                                <TrendingUp/>
                                <p>Statistics</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/exercises'>
                            <NavigationItemContent>
                                <Folder/>
                                <p>Exercises</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                </NavigationTop>
                <NavigationBottom>
                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/settings'>
                            <NavigationItemContent>
                                <Settings/>
                                <p>Settings</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/account'>
                            <NavigationItemContent>
                                <Face/>
                                <p>Account</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                    <NavigationItem>
                        <button onClick={() => handleLogOut()}>
                            <LogoutOutlined/>
                            <p>Log out</p>
                        </button>
                    </NavigationItem>
                </NavigationBottom>
            </Navigation>
        </SideNavWrapper>
    )
};

export default SideNavLeft;
