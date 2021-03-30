import React from "react";
import {TrainingDayWrapper} from './TrainingDayStyles';
import {TrainingDay as TrainingDayType} from "../../../../../contexts/TrainingPlansContext";
import Exercise from "./Exercise/Exercise";



interface Props {
    trainingDay: TrainingDayType;
}

const TrainingDay: React.FC<Props> = ({trainingDay}) => {
    console.log(trainingDay);


    return (
        <TrainingDayWrapper>
            <p>{trainingDay.trainingDayName}</p>
            <hr/>
            <h4>Exercises</h4>
            {trainingDay.exercises.map(exercise => (
                <Exercise exercise={exercise} key={exercise._id}/>
            ))}
        </TrainingDayWrapper>
    )
};

export default TrainingDay;
