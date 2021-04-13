import React, {useContext} from "react";
import {
    TrainingDataWrapper,
    TrainingNotSelected,
    NotSelectedContent,
    DetailsWrapper,
    DetailsHeading,
    DetailsHeadingLeft,
    DetailsHeadingRight,
    DetailsDate,
    DetailsHeader,
    ExercisesHeader,
    Exercises
} from './TrainingDataStyles';
import {TimerWrapper} from '../../../../assets/styles/customStylesComponents/Timer';
import {TrainingsContext} from "../../../../contexts/TrainingsContext";
import {EventBusy} from '@material-ui/icons';
import Exercise from "./Exercise/Exercise";

const TrainingData: React.FC = () => {
    const {openedTraining} = useContext(TrainingsContext);
    const isEmpty = Object.keys(openedTraining).length === 0;




    return (
        <TrainingDataWrapper>
            {isEmpty ? (
                <TrainingNotSelected>
                    <NotSelectedContent>
                        <EventBusy/>
                        <h1>Please select training session to see more details</h1>
                    </NotSelectedContent>
                </TrainingNotSelected>
            ): (
                <DetailsWrapper>
                    <DetailsHeading>
                        <DetailsHeadingLeft>
                            <DetailsDate>{openedTraining.date.slice(0,10)}</DetailsDate>
                            <DetailsHeader>Plan name: <span>{openedTraining.planName}</span></DetailsHeader>
                            <DetailsHeader>Training day: <span>{openedTraining.dayName}</span></DetailsHeader>
                        </DetailsHeadingLeft>
                        <DetailsHeadingRight>
                            <TimerWrapper>
                                <p>{openedTraining.length}</p>
                            </TimerWrapper>
                        </DetailsHeadingRight>
                    </DetailsHeading>
                    <ExercisesHeader>Exercises</ExercisesHeader>
                    <Exercises >
                        {openedTraining.exercises.map((exercise, index) => (
                            <Exercise exercise={exercise} index={index + 1}/>
                        ))}
                    </Exercises>
                </DetailsWrapper>
            )}

        </TrainingDataWrapper>
    )
};

export default TrainingData;