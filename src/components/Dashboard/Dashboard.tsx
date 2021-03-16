import React, {useContext} from 'react';
import TopNav from "../Navigation/TopNav/TopNav";
import {UserAuthenticationContext} from "../../contexts/UserAuthenticationContext";

const Dashboard: React.FC = () => {
    const {onLogOut} = useContext(UserAuthenticationContext)

    const testLogOut = () => {
        // onLogOut();
        console.log('log out')
    }
    return (
        <>
            <TopNav/>
            <p>Dashboard works</p>
            <button onClick={() => onLogOut()}>Log out</button>
        </>
    )
};

export default Dashboard;
