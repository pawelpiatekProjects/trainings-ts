import React, {useContext} from 'react';
import {
    TrainingPlanWrapper,
    TrainingPlanContent,
    TrainingPlanContentData,
    TrainingPlanHeading,
    TrainingPlanHeader,
    HeadingButtons,
    Button,
    TrainingPlanIntroData,
    TrainingPlanIntroElement,
    TrainingDaysWrapper,
    TrainingDaysEmpty,
    TrainingDaysEmptyHeader
} from './TrainingPlanStyles';
import {ReactComponent as ThemeImg} from '../../../../assets/images/svg/dummbell-big.svg';
import {TrainingPlanAll, TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import TrainingDay from "./TrainingDay/TrainingDay";
import * as variables from '../../../../assets/styles/variables';
import TrainingDayController from "./TrainingDay/TrainingDayController";


const TrainingPlan: React.FC = () => {

    const {openedPlan} = useContext(TrainingPlanContext)!;

    let trainingDaysWrapperContent;
    if(openedPlan.trainingDays) {
        if(openedPlan.trainingDays.length > 0) {
            trainingDaysWrapperContent = openedPlan.trainingDays.map(trainingDay => (
                <TrainingDayController key={trainingDay._id} trainingDay={trainingDay}/>
            ))
        } else {
            trainingDaysWrapperContent = (
                <TrainingDaysEmpty>
                    <TrainingDaysEmptyHeader>
                        Your training plan is empty. Add training days
                    </TrainingDaysEmptyHeader>
                    <Button color={variables.yellowPrimary}>Add</Button>
                </TrainingDaysEmpty>
            )
        }
    } else {
        trainingDaysWrapperContent = null;
    }

    return (
        <TrainingPlanWrapper>
            <TrainingPlanContent>
                <ThemeImg/>
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
                            <span>
                                {openedPlan.createdAt ? `Created at: ${openedPlan.createdAt.slice(0, 10)}` : ''}
                            </span>
                        </TrainingPlanIntroElement>
                    </TrainingPlanIntroData>
                    <p>Description: {openedPlan.description && openedPlan.description}</p>
                    {openedPlan.trainingDays ? <p>Training days: {openedPlan.trainingDays.length}</p> : null}
                    <TrainingDaysWrapper>
                        {trainingDaysWrapperContent}
                    </TrainingDaysWrapper>
                </TrainingPlanContentData>

            </TrainingPlanContent>
        </TrainingPlanWrapper>
    )
};

export default TrainingPlan;
