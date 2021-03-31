import React, {useContext} from 'react';
import PopUp from "./PopUp";
import {PopUpContext} from "../../contexts/PopUpContext";

const PopUpController: React.FC = () => {
    const {popUpConfig} = useContext(PopUpContext);
    return (
        <PopUp isOpen={popUpConfig.isPopUpOpen}>
            <p>test</p>
        </PopUp>
    )
};

export default PopUpController