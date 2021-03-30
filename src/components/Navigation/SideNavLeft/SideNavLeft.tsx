import React from 'react';
import {
    SideNavWrapper,
    Navigation,
    NavigationTop,
    NavigationBottom,
    NavigationItem,
    NavigationItemContent
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
} from '@material-ui/icons';
import {LogoutOutlined} from '@ant-design/icons'
import * as variables from "../../../assets/styles/variables";


const SideNavLeft: React.FC = () => {

    const activeStyle = {
        color: variables.textColorPrimary
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
                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/trainings'>
                            <NavigationItemContent>
                                <CalendarToday/>
                                <p>Calendar</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/trainings'>
                            <NavigationItemContent>
                                <TrendingUp/>
                                <p>Statistics</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavLink activeStyle={activeStyle} to='/trainings'>
                            <NavigationItemContent>
                                <Folder/>
                                <p>Exercises</p>
                            </NavigationItemContent>
                        </NavLink>
                    </NavigationItem>
                </NavigationTop>
               <NavigationBottom>
                   <NavigationItem>
                       <NavLink activeStyle={activeStyle} to='/trainings'>
                           <NavigationItemContent>
                               <Settings/>
                               <p>Settings</p>
                           </NavigationItemContent>
                       </NavLink>
                   </NavigationItem>
                   <NavigationItem>
                       <NavLink activeStyle={activeStyle} to='/trainings'>
                           <NavigationItemContent>
                               <Face/>
                               <p>Account</p>
                           </NavigationItemContent>
                       </NavLink>
                   </NavigationItem>
                   <NavigationItem>
                       <NavLink activeStyle={activeStyle} to='/trainings'>
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
