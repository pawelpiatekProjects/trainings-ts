import React, { useContext } from 'react';
import {
    TrainingPlanWrapper,
    TrainingPlanContent,
    TrainingPlanContentData,
    TrainingPlanHeading,
    TrainingPlanHeader,
    HeadingButtons,
    Button,
    TrainingPlanIntroData,
    TrainingPlanIntroElement
} from './TrainingPlanStyles';
import { ReactComponent as ThemeImg } from '../../../../assets/images/svg/dummbell-big.svg';
import { TrainingPlanAll, TrainingPlanContext } from "../../../../contexts/TrainingPlansContext";
import TrainingDay from "./TrainingDay/TrainingDay";
import * as variables from '../../../../assets/styles/variables';




const TrainingPlan: React.FC = () => {

    const { openedPlan } = useContext(TrainingPlanContext)!;

    console.log('opened plan', openedPlan)


    return (
        <TrainingPlanWrapper>
            <TrainingPlanContent>
                <ThemeImg />
                <TrainingPlanContentData>
                    <TrainingPlanHeading>
                        <TrainingPlanHeader> {openedPlan.trainingPlanName && openedPlan.trainingPlanName}</TrainingPlanHeader>
                        <HeadingButtons>
                            <Button color={variables.yellowPrimary}>Edit</Button>
                            <Button color={variables.yellowPrimary}>Delete</Button>
                        </HeadingButtons>
                    </TrainingPlanHeading>
                    <TrainingPlanIntroData>
                        <TrainingPlanIntroElement>
                            Created at:
                            <span> {openedPlan.createdAt.slice(0, 10)}</span>
                        </TrainingPlanIntroElement>
                    </TrainingPlanIntroData>
                    <p>Description: {openedPlan.description && openedPlan.description}</p>
                    {openedPlan.trainingDays ? <p>Training days: {openedPlan.trainingDays.length}</p> : null}
                    <hr />
                    <h4>Training Days</h4>
                    {openedPlan.trainingDays ? openedPlan.trainingDays.map(trainingDay => (
                        <TrainingDay key={trainingDay._id} trainingDay={trainingDay} />
                    )) : null}
                </TrainingPlanContentData>

            </TrainingPlanContent>
        </TrainingPlanWrapper>
    )


};

export default TrainingPlan;
