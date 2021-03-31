import React, {useContext} from 'react';
import {
    Button,
    HeadingButtons,
    TrainingDaysEmpty,
    TrainingDaysEmptyHeader,
    TrainingDaysWrapper,
    TrainingPlanContent,
    TrainingPlanContentData,
    TrainingPlanHeader,
    TrainingPlanHeading,
    TrainingPlanIntroData,
    TrainingPlanIntroElement,
    TrainingPlanWrapper
} from './TrainingPlanStyles';
import {ReactComponent as ThemeImg} from '../../../../assets/images/svg/dummbell-big.svg';
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import * as variables from '../../../../assets/styles/variables';
import TrainingDayController from "./TrainingDay/TrainingDayController";
import {ContentType, PopUpContext} from "../../../../contexts/PopUpContext";


const TrainingPlan: React.FC = () => {
    const {onOpenModal} = useContext(PopUpContext)
    const {openedPlan} = useContext(TrainingPlanContext)!;

    const handleModalOpen = () => {
        onOpenModal(ContentType.AddTrainingDay)
    }

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
                    <Button onClick={() => handleModalOpen()} color={variables.yellowPrimary}>Add</Button>
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
                            <Button onClick={() => handleModalOpen()} color={variables.yellowPrimary}>Add</Button>
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
