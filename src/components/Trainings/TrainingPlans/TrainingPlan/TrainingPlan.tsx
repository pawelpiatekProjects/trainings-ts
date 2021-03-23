import React, {useContext} from 'react';
import styled from "styled-components";
import {TrainingPlanAll, TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import TrainingDay from "./TrainingDay/TrainingDay";

const TrainingPlanWrapper = styled.div`

`;


const TrainingPlan: React.FC = () => {

    const {openedPlan} = useContext(TrainingPlanContext)!;

    console.log('opened plan', openedPlan.trainingDays)


    return (
        <TrainingPlanWrapper>
            <p>Name: {openedPlan.trainingPlanName && openedPlan.trainingPlanName}</p>
            <p>Description: {openedPlan.description && openedPlan.description}</p>
            {openedPlan.trainingDays ? <p>Training days: {openedPlan.trainingDays.length}</p> : null}
            <hr/>
            <h4>Training Days</h4>
            {openedPlan.trainingDays ? openedPlan.trainingDays.map(trainingDay => (
                <TrainingDay key={trainingDay._id} trainingDay={trainingDay}/>
            )) : null}
        </TrainingPlanWrapper>
    )


};

export default TrainingPlan;
