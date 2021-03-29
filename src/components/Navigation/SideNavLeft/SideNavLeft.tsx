import React from 'react';
import {
    SideNavWrapper,
    Navigation,
    NavigationItem,
    NavigationItemContent
} from './SideNavLeftStyles';
import {NavLink} from "react-router-dom";
import {List, FitnessCenter} from '@material-ui/icons';
import * as variables from "../../../assets/styles/variables";



const SideNavLeft: React.FC = () => {

    const activeStyle = {
        color:  variables.textColorPrimary
    }
    return (
        <SideNavWrapper>
            <Navigation>
                <NavigationItem>
                    <NavLink activeStyle={activeStyle} to='/trainings/trainings-list'>
                        <NavigationItemContent>
                            <List/>
                        </NavigationItemContent>
                    </NavLink>
                </NavigationItem>
                <NavigationItem>
                    <NavLink activeStyle={activeStyle} to='/trainings/training-plans'>
                        <NavigationItemContent>
                            <FitnessCenter/>
                        </NavigationItemContent>
                    </NavLink>
                </NavigationItem>
            </Navigation>
        </SideNavWrapper>
    )
};

export default SideNavLeft;
