import React, {useContext} from "react";
import {
    LogOutWrapper,
    LogOutHeader,
    LogOutParagraph,
    ButtonsGroup
} from './LogOutStyles';
import {PrimaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import {clearAuthenticatedUSerData} from '../../../../services/authenticationService';
import {useHistory} from "react-router-dom";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import * as variables from '../../../../assets/styles/variables';

const LogOut: React.FC = () => {
    const history = useHistory();
    const {onCloseModal} = useContext(PopUpContext);

    const onLogOut = () => {
        clearAuthenticatedUSerData();
        history.push('/sign-in');
        onCloseModal();
    }

    const onCancel = () => {
        onCloseModal();
    }

    return (
        <LogOutWrapper>
            <LogOutHeader>Log out</LogOutHeader>
            <LogOutParagraph>Do you want to log out?</LogOutParagraph>
            <ButtonsGroup>
                <PrimaryButton color={variables.errorRed} onClick={() => onLogOut()}>Log out</PrimaryButton>
                <PrimaryButton color={variables.yellowPrimary} onClick={() => onCancel()}>Cancel</PrimaryButton>
            </ButtonsGroup>
        </LogOutWrapper>
    )
};

export default LogOut;