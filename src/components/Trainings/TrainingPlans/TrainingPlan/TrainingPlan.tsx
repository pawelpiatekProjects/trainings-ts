import React, {useContext} from 'react';
import styled from "styled-components";
import {TrainingPlanAll, TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import TrainingDay from "./TrainingDay/TrainingDay";

const TrainingPlanWrapper = styled.div`

`;


const TrainingPlan: React.FC = () => {

    const {openedPlan} = useContext(TrainingPlanContext)!;
    // const plan = openedPlan ?? Object.keys(openedPlan).length > 0;


    console.log('opened plan', openedPlan)


    return (
        <TrainingPlanWrapper>
            <p>Name: {openedPlan.trainingPlanName}</p>
            <p>Description: {openedPlan.description }</p>
            <p>Training days: {openedPlan.trainingDays.length}</p>
            <hr/>
            <h4>Training Days</h4>
            {openedPlan.trainingDays.map(trainingDay => (
                <TrainingDay key={trainingDay._id} trainingDay={trainingDay}/>
            ))}
        </TrainingPlanWrapper>
    )


};

export default TrainingPlan;
