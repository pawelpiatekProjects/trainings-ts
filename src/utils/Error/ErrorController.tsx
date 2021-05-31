import React, {useContext} from "react";
import Error from "./Error";
import {useHistory} from "react-router-dom";
import {clearAuthenticatedUSerData} from '../../services/authenticationService';
import {ErrorContext} from "../../contexts/ErrorContext";

const ErrorController: React.FC = () => {

    const history = useHistory();

    const {handleErrorModalClose} = useContext(ErrorContext);

    const errorRedirect = () => {
        clearAuthenticatedUSerData();
        history.push('/sign-in');
        handleErrorModalClose();
    }

    return (
        <Error errorRedirect={errorRedirect}/>
    )
};

export default ErrorController;