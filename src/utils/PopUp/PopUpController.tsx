import React, {useContext} from 'react';
import PopUp from "./PopUp";
import {ContentType, PopUpContext} from "../../contexts/PopUpContext";
import PlanForm from "./PopUpContent/PlanForm/PlanForm";
import TrainingDayForm from "./PopUpContent/TrainingDayForm/TrainingDayForm";
import TrainingDayExerciseForm from "./PopUpContent/TrainingDayExerciseForm/TrainingDayExerciseForm";
import ExerciseDescription from "./PopUpContent/ExerciseDescription/ExerciseDescription";
import DeleteExercise from "./PopUpContent/DeleteItem/DeleteExercise";
import DeleteTrainingDay from "./PopUpContent/DeleteItem/DeleteTrainingDay";
import DeleteTrainingPlan from "./PopUpContent/DeleteItem/DeleteTrainingPlan";
import Error from "./PopUpContent/Error/Error";
import NewTrainingController from "./PopUpContent/NewTraining/NewTrainingController";
import LogOut from "./PopUpContent/LogOut/LogOut";
import FinishTraining from "./PopUpContent/FinishTraining/FinishTraining";
import ExitTraining from "./PopUpContent/ExitTraining/ExitTraining";
import OpenedTrainingAlert from "./PopUpContent/NewTraining/OpenedTrainingAlert/OpenedTrainingAlert";
import CreatedAccount from "./PopUpContent/CreatedAccount/CreatedAccount";


const PopUpController: React.FC = () => {

    const {popUpConfig} = useContext(PopUpContext);
    let contentElement;

    switch (popUpConfig.content) {
        case ContentType.AddTrainingPlan: {
            contentElement = <PlanForm/>
            break;
        }
        case ContentType.AddTrainingDay: {
            contentElement = <TrainingDayForm/>
            break
        }
        case ContentType.AddExercise: {
            contentElement = <TrainingDayExerciseForm/>
            break;
        }
        case ContentType.ShowExerciseDescription: {
            contentElement = <ExerciseDescription/>
            break;
        }
        case ContentType.DeleteExercise: {
            contentElement = <DeleteExercise/>;
            break;
        }
        case ContentType.DeleteTrainingDay: {
            contentElement = <DeleteTrainingDay/>;
            break;
        }
        case ContentType.DeleteTrainingPlan: {
            contentElement = <DeleteTrainingPlan/>
            break;
        }
        case ContentType.EditExercise: {
            contentElement = <TrainingDayExerciseForm/>
            break;
        }
        case ContentType.EditTrainingDay: {
            contentElement = <TrainingDayForm/>
            break;
        }
        case ContentType.EditTrainingPlan: {
            contentElement = <PlanForm/>;
            break;
        }
        case ContentType.Error: {
            contentElement = <Error/>
            break;
        }
        case ContentType.StartNewTraining: {
            contentElement = <NewTrainingController/>
            break;
        }
        case ContentType.LogOut: {
            contentElement = <LogOut/>;
            break;
        }
        case ContentType.FinishTraining: {
            contentElement = <FinishTraining/>;
            break;
        }
        case ContentType.ExitTraining: {
            contentElement = <ExitTraining/>
            break;
        }
        case ContentType.TrainingNotFinished: {
            contentElement = <OpenedTrainingAlert/>
            break;
        }
        case ContentType.CreatedAccount: {
            contentElement = <CreatedAccount/>
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