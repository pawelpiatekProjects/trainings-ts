import React, {useContext, useEffect} from 'react';
import {get} from '../../../../services/restService';
import TrainingPlan from "./TrainingPlan";
import {useLocation} from 'react-router-dom';
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {ContentType, PopUpContext} from "../../../../contexts/PopUpContext";


const TrainingPlanController: React.FC = () => {

    const {onOpenModal} = useContext(PopUpContext);

    const {state} = useLocation();
    const {setOpenedPlan} = useContext(TrainingPlanContext);


    const fetchTrainingPlan = async () => {
        const {data} = await get<any>(`plans/all/${state}`);
        setOpenedPlan(data.plan);
    }

    const onAddTrainingDay = () => {
        onOpenModal({
            contentType: ContentType.AddTrainingDay
        })
    }

    const onDeleteTrainingPlan = () => {
        onOpenModal({
            contentType: ContentType.DeleteTrainingPlan
        })
    }

    useEffect(() => {
        fetchTrainingPlan();
    }, [])


    return (
        <TrainingPlan onAddTrainingDay={onAddTrainingDay} onDeleteTrainingPlan={onDeleteTrainingPlan}/>
    )
};

export default TrainingPlanController;
