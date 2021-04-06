import React, {useContext} from "react";
import {ErrorWrapper, ErrorMessage, Button} from './ErrorStyles';
import {PopUpContext} from "../../../../contexts/PopUpContext";

const Error: React.FC = () => {
    const {popUpConfig} = useContext(PopUpContext);
    return (
        <ErrorWrapper>
            <ErrorMessage>{popUpConfig.openModalData!.message!}</ErrorMessage>
            <Button>Close</Button>
        </ErrorWrapper>
    )
};

export default Error;