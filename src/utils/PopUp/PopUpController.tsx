import React, {useContext} from 'react';
import PopUp from "./PopUp";
import {PopUpContext} from "../../contexts/PopUpContext";
import {ContentType} from "../../contexts/PopUpContext";
import CreatePlanForm from "./PopUpContent/CreatePlanForm/CreatePlanForm";

const PopUpController: React.FC = () => {
    const {popUpConfig} = useContext(PopUpContext);
    let contentElement;

    if(popUpConfig.content === ContentType.AddTrainingPlan) {
        contentElement = <CreatePlanForm/>
    }
    return (
        <PopUp isOpen={popUpConfig.isPopUpOpen}>
            {contentElement}
        </PopUp>
    )
};

export default PopUpController