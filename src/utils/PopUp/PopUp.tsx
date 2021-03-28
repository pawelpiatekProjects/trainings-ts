import React,{useContext} from 'react';
import {
    PopUpWrapper,
    PopUpContent,
    Backdrop,
    PopUpText
} from './PopUpStyles';
import {PopUpContext} from "../../contexts/PopUpContext";
import {ErrorOutline} from '@material-ui/icons';

const PopUp: React.FC = () => {
    const {popUpMessage, onCloseModal} = useContext(PopUpContext);
    return (
        <PopUpWrapper isOpen={!!popUpMessage}>
        {/*<PopUpWrapper isOpen={true}>*/}
            <PopUpContent>
                <ErrorOutline/>
                <PopUpText>{popUpMessage && popUpMessage}</PopUpText>
                {/*<PopUpText>Sign in Error</PopUpText>*/}
            </PopUpContent>
            <Backdrop onClick={() => onCloseModal()}/>
        </PopUpWrapper>
    )
};

export default PopUp;
