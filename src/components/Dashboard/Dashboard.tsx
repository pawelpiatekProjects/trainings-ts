import React from 'react';
import TopNav from "../Navigation/TopNav/TopNav";
import {clearAuthenticatedUSerData} from '../../services/authenticationService';
import {onDeleteAuthorizationHeader} from '../../services/restService';

import {RouteComponentProps} from "react-router-dom";

interface Props extends RouteComponentProps{ }

const Dashboard: React.FC<Props> = ({history}) => {


    const logOut = () => {
         console.log('logged out')
        clearAuthenticatedUSerData();
         onDeleteAuthorizationHeader();
        history.push('/sign-in');
    }
    return (
        <>
            <TopNav/>
            <p>Dashboard works</p>
            <button onClick={() => logOut()}>Log out</button>
        </>
    )
};

export default Dashboard;
