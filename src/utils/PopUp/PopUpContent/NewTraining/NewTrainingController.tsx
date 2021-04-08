import React, {useContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import NewTraining from "./NewTraining";
import {TrainingDay, TrainingPlanContext, TrainingPlanIntro} from "../../../../contexts/TrainingPlansContext";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {LoaderContext} from "../../../../contexts/LoaderContext";

export type tabs = 'plan' | 'day';

const NewTrainingController: React.FC = () => {
    const history = useHistory();
    const {fetchTrainingPlans} = useContext(TrainingPlanContext);
    const {onCloseModal} = useContext(PopUpContext);
    const {openLoader, closeLoader} = useContext(LoaderContext);

    const [activeTab, setActiveTab] = useState('plan' as tabs);

    useEffect(() => {
        fetchTrainingPlans();
    },[]);

    const onChangeActiveTab = (tabName: tabs) => {
        console.log('change to: ', tabName);
        setActiveTab(tabName);
    }

    const onStartNewTraining =(trainingDay: TrainingDay) => {
        openLoader();
        onCloseModal();

        setTimeout(() => {
            history.push('/trainings/new');
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