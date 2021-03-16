import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const SideButtons = styled.ul`

`;

const SideButton = styled.li`

`;


const Intro: React.FC = () => {
    return (
        <>
            <SideButtons>
                <SideButton>
                    <NavLink to='sign-in'>Sign In</NavLink>
                </SideButton>
                <SideButton>
                    <NavLink to='sign-up'>Sign Up</NavLink>
                </SideButton>
            </SideButtons>
        </>
    )
};

export default Intro;
