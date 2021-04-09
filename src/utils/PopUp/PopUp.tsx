import React,{useContext} from 'react';
import {
    PopUpWrapper,
    PopUpContent,
    PopUpText
} from './PopUpStyles';
import {Backdrop} from '../../assets/styles/customStylesComponents/backdrop'
import {PopUpContext} from "../../contexts/PopUpContext";
import {ErrorOutline} from '@material-ui/icons';

interface Props {
    isOpen: boolean
}

const PopUp: React.FC<Props> = ({isOpen, children}) => {
    const {onCloseModal} = useContext(PopUpContext);
    return (
        <PopUpWrapper>
            <PopUpContent isOpen={isOpen}>
                {children}
            </PopUpContent>
            <Backdrop isOpen={isOpen} onClick={() => onCloseModal()}/>
        </PopUpWrapper>
    )
};

export default PopUp;
