import React from 'react';
import {useLocation} from 'react-router-dom';
import {
    SideNavWrapper,
    Navigation,
    NavigationTop,
    NavigationBottom,
    NavigationItem,
    NavigationItemContent,
    NavigationItemParagraph,
    NestedNavItems,
    NestedNavItem,
    NestedNavLink
} from './SideNavLeftStyles';
import {NavLink} from "react-router-dom";
import {
    Dashboard,
    FitnessCenter,
    CalendarToday,
    TrendingUp,
    Folder,
    Settings,
    Face,
    KeyboardArrowRight
} from '@material-ui/icons';
import {LogoutOutlined} from '@ant-design/icons'
import * as variables from "../../../assets/styles/variables";


const SideNavLeft: React.FC = () => {
    const location = useLocation().pathname.split('/')[1];
    console.log('location: ', location === 'trainings')

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
                       <NavLink activeStyle={activeStyle} to='/log-out'>
                           <NavigationItemContent>
                                   <LogoutOutlined/>
                                   <p>Log out</p>
                           </NavigationItemContent>
                       </NavLink>
                   </NavigationItem>
               </NavigationBottom>
            </Navigation>
        </SideNavWrapper>
    )
};

export default SideNavLeft;
