import React from 'react';
import TopNav from "./TopNav";
import {clearAuthenticatedUSerData} from "../../../services/authenticationService";
import {onDeleteAuthorizationHeader} from "../../../services/restService";
import { useHistory } from 'react-router-dom';

const TopNavController: React.FC = () => {
    const history = useHistory();

    const logOut = () => {
        console.log('logged out')
        clearAuthenticatedUSerData();
        onDeleteAuthorizationHeader();
        history.push('/sign-in');
    }
    // todo: Add styles to active tab in nav
    return (
        <TopNav logOut={logOut} />
    )
};

export default TopNavController;
