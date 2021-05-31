import React, {useContext} from "react";
import {PopUpWrapper, PopUpContent} from '../../assets/styles/customStylesComponents/popUp';
import {ErrorContext} from "../../contexts/ErrorContext";
import {Backdrop} from '../../assets/styles/customStylesComponents/backdrop';
import {ErrorWrapper, ErrorHeader, ErrorMessage, BottomRow} from './ErrorStyles';
import {Warning} from '@material-ui/icons';
import {SecondaryButton} from '../../assets/styles/customStylesComponents/buttons';

interface Props {
    errorRedirect: () => void;
}

const Error: React.FC<Props> = ({errorRedirect}) => {

    const {isErrorModalOpen, handleErrorModalClose, errorConfig} = useContext(ErrorContext);

    return (
        <PopUpWrapper>
            <PopUpContent isOpen={isErrorModalOpen}>
                <ErrorWrapper>
                    <Warning/>
                    <ErrorHeader>Something went wrong</ErrorHeader>
                    <ErrorMessage>{errorConfig.message}</ErrorMessage>
                    <BottomRow isOpen={errorConfig.isCancelButton}>
                        <SecondaryButton onClick={() => errorRedirect()}>Cancel</SecondaryButton>
                    </BottomRow>
                </ErrorWrapper>
            </PopUpContent>
            <Backdrop isOpen={isErrorModalOpen} onClick={() => handleErrorModalClose()}/>
        </PopUpWrapper>
    )
};

export default Error;