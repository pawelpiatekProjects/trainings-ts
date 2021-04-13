import React, {useState} from "react";
import {
    ExerciseWrapper,
    ExerciseContent,
    SeriesWrapper,
    SeriesItem,
    SeriesItemContent,
    SeriesItemContentHeader
} from './ExerciseStyles';
import {TrainingExercise} from "../../../../../contexts/TrainingsContext";

interface Props {
    exercise: TrainingExercise;
    index: number
}

const Exercise: React.FC<Props> = ({exercise, index}) => {
    const [isSeriesOpen, setIsSeriesOpen] = useState(false);

    const toggleIsSeriesOpen = () => {
        setIsSeriesOpen(prevState => !prevState);
    }

    return (
        <ExerciseWrapper onClick={() => toggleIsSeriesOpen()}>
            <ExerciseContent key={exercise._id} isOpen={isSeriesOpen}>
                <p>{index}.</p>
                <p> {exercise.exerciseName}</p>
            </ExerciseContent>
            <SeriesWrapper isOpen={isSeriesOpen}>
                <SeriesItem>
                    <SeriesItemContentHeader>Series</SeriesItemContentHeader>
                    <SeriesItemContentHeader>Resp</SeriesItemContentHeader>
                    <SeriesItemContentHeader>Weight (kg)</SeriesItemContentHeader>
                    <SeriesItemContentHeader>Pause (s)</SeriesItemContentHeader>
                    <SeriesItemContentHeader>Rate</SeriesItemContentHeader>
                </SeriesItem>
                {exercise.series.map((seriesItem, index) => (
                    <SeriesItem>
                        <SeriesItemContent>{index + 1}.</SeriesItemContent>
                        <SeriesItemContent>{seriesItem.reps}</SeriesItemContent>
                        <SeriesItemContent>{seriesItem.weight}</SeriesItemContent>
                        <SeriesItemContent>{seriesItem.pause}</SeriesItemContent>
                        <SeriesItemContent>{seriesItem.rate}</SeriesItemContent>
                    </SeriesItem>
                ))}
            </SeriesWrapper>
        </ExerciseWrapper>
    )
};

export default Exercise;