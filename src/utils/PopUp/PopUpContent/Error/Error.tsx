import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {ErrorWrapper, ErrorMessage, Button} from './ErrorStyles';
import {PopUpContext} from "../../../../contexts/PopUpContext";
import * as variables from '../../../../assets/styles/variables';

const Error: React.FC = () => {
    const {popUpConfig, onCloseModal} = useContext(PopUpContext);
    const history = useHistory();

    const redirectToSignIn = () => {
        history.push('/sign-in');
        onCloseModal();
    }

    return (
        <ErrorWrapper>
            <ErrorMessage>{popUpConfig.openModalData!.message!}</ErrorMessage>
            <Button color={variables.yellowPrimary} onClick={() => redirectToSignIn()}>Sign In</Button>
        </ErrorWrapper>
    )
};

export default Error;