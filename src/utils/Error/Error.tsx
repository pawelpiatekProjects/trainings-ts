import React, {useContext} from "react";
import {PopUpWrapper, PopUpContent} from '../../assets/styles/customStylesComponents/popUp';
import {ErrorContext} from "../../contexts/ErrorContext";
import {Backdrop} from '../../assets/styles/customStylesComponents/backdrop';
import {ErrorWrapper, ErrorHeader, ErrorMessage} from './ErrorStyles';
import {Warning} from '@material-ui/icons';

const Error: React.FC = () => {

    const {isErrorModalOpen, handleErrorModalClose, errorMessage} = useContext(ErrorContext);

    return (
        <PopUpWrapper>
            <PopUpContent isOpen={isErrorModalOpen}>
                <ErrorWrapper>
                    <Warning/>
                    <ErrorHeader>Something went wrong</ErrorHeader>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                </ErrorWrapper>
            </PopUpContent>
            <Backdrop isOpen={isErrorModalOpen} onClick={() => handleErrorModalClose()}/>
        </PopUpWrapper>
    )
};

export default Error;