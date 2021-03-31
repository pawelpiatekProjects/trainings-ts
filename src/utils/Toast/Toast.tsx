import React, {useContext} from 'react';
import {
    ToastWrapper,
    ToastMessage
} from './ToastStyles';
import {ToastContext} from "../../contexts/ToastContext";

const Toast: React.FC = () => {
    const {toastMessage} = useContext(ToastContext);
    return (
        <ToastWrapper isOpen={!!toastMessage}>
            <ToastMessage>{toastMessage}</ToastMessage>
        </ToastWrapper>
    )
};

export default Toast;