import React, {useContext} from 'react';
import PopUp from "./PopUp";
import {ContentType, PopUpContext} from "../../contexts/PopUpContext";
import CreatePlanForm from "./PopUpContent/CreatePlanForm/CreatePlanForm";
import CreateTrainingDayForm from "./PopUpContent/CreateTrainingDayForm/CreateTrainingDayForm";
import AddTrainingDayExerciseForm from "./PopUpContent/AddTrainingDayExerciseForm/AddTrainingDayExerciseForm";
import ExerciseDescription from "./PopUpContent/ExerciseDescription/ExerciseDescription";
import DeleteExercise from "./PopUpContent/DeleteItem/DeleteExercise";

const PopUpController: React.FC = () => {
    const {popUpConfig} = useContext(PopUpContext);
    let contentElement;

    switch (popUpConfig.content) {
        case ContentType.AddTrainingPlan: {
            contentElement = <CreatePlanForm/>
            break;
        } case ContentType.AddTrainingDay: {
            contentElement = <CreateTrainingDayForm/>
            break
        } case ContentType.AddExercise: {
            contentElement = <AddTrainingDayExerciseForm/>
            break;
        } case ContentType.ShowExerciseDescription: {
            contentElement = <ExerciseDescription/>
            break;
        } case ContentType.DeleteExercise: {
            contentElement = <DeleteExercise/>;
            break;
        }
    }


    return (
        <PopUp isOpen={popUpConfig.isPopUpOpen}>
            {contentElement}
        </PopUp>
    )
};

export default PopUpController