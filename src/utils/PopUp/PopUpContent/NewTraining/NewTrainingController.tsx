import React, {useContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import NewTraining from "./NewTraining";
import {TrainingDay, TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {ContentType, PopUpContext} from "../../../../contexts/PopUpContext";
import {LoaderContext} from "../../../../contexts/LoaderContext";
import {TrainingsContext} from "../../../../contexts/TrainingsContext";

export type tabs = 'plan' | 'day';

const NewTrainingController: React.FC = () => {
    const history = useHistory();
    const {fetchTrainingPlans, openedPlan} = useContext(TrainingPlanContext);
    const {initializeNewTraining, activeTraining} = useContext(TrainingsContext);
    const {onCloseModal} = useContext(PopUpContext);
    const {openLoader, closeLoader} = useContext(LoaderContext);

    const [activeTab, setActiveTab] = useState('plan' as tabs);

    useEffect(() => {
        fetchTrainingPlans();
    }, []);

    const onChangeActiveTab = (tabName: tabs) => {
        console.log('change to: ', tabName);
        setActiveTab(tabName);
    }

    const onStartNewTraining = async (trainingDay: TrainingDay) => {
        openLoader();
        onCloseModal();

        await initializeNewTraining(openedPlan._id, trainingDay._id);

        setTimeout(() => {
            history.push(`/trainings/new`);
            setActiveTab('plan');
            closeLoader();
        }, 1000)

    }


    return (
        <NewTraining
            onChangeActiveTab={onChangeActiveTab}
            activeTab={activeTab}
            onStartNewTraining={onStartNewTraining}
        />
    )
};

export default NewTrainingController;