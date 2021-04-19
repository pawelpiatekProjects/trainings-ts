import React, {useContext} from 'react';
import {CreatedAccountWrapper, CreatedAccountHeader} from './CreatedAccountStyles';
import {SecondaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {useHistory} from "react-router-dom";

const CreatedAccount: React.FC = () => {
    const {onCloseModal} = useContext(PopUpContext);
    const history = useHistory();

    const handleSignIn = () => {
        onCloseModal();
        history.push('/sign-in')
    }

    return (
        <CreatedAccountWrapper>
            <CreatedAccountHeader>Created account successfully</CreatedAccountHeader>
            <SecondaryButton onClick={() => handleSignIn()}>Sign in</SecondaryButton>
        </CreatedAccountWrapper>
    )
};

export default CreatedAccount;