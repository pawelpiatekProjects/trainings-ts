import React, {useContext} from "react";
import {
    TrainingDataWrapper,
    TrainingNotSelected,
    NotSelectedContent,
    DetailsWrapper,
    DetailsDate,
    DetailsHeader,
    ExercisesHeader,
    Exercises,
    Exercise,
    ExerciseWrapper,
    SeriesWrapper,
    SeriesItem,
    SeriesItemContent
} from './TrainingDataStyles';
import {TrainingsContext} from "../../../../contexts/TrainingsContext";
import {EventBusy} from '@material-ui/icons';

const TrainingData: React.FC = () => {

    const {openedTraining} = useContext(TrainingsContext);
    const isEmpty = Object.keys(openedTraining).length === 0;
    console.log('isEmpty: ', isEmpty);
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
                    <DetailsDate>{openedTraining.date.slice(0,10)}</DetailsDate>
                    <DetailsHeader>Plan name: <span>{openedTraining.planName}</span></DetailsHeader>
                    <DetailsHeader>Training day: <span>{openedTraining.dayName}</span></DetailsHeader>
                    <ExercisesHeader>Exercises</ExercisesHeader>
                    <Exercises>
                        {openedTraining.exercises.map((exercise, index) => (
                            <ExerciseWrapper>
                                <Exercise key={exercise._id}>
                                    <p>{index + 1}.</p>
                                    <p> {exercise.exerciseName}</p>
                                </Exercise>
                                <SeriesWrapper>
                                    {exercise.series.map(seriesItem => (
                                        <SeriesItem>
                                            <SeriesItemContent>{seriesItem.reps}</SeriesItemContent>
                                            <SeriesItemContent>{seriesItem.weight}</SeriesItemContent>
                                            <SeriesItemContent>{seriesItem.pause}</SeriesItemContent>
                                            <SeriesItemContent>{seriesItem.rate}</SeriesItemContent>
                                        </SeriesItem>
                                    ))}
                                </SeriesWrapper>
                            </ExerciseWrapper>
                        ))}
                    </Exercises>
                </DetailsWrapper>
            )}

        </TrainingDataWrapper>
    )
};

export default TrainingData;