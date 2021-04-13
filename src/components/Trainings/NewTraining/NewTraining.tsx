import React, {useContext} from "react";
import {
    NewTrainingWrapper,
    Heading,
    HeadingContent,
    HeadingItem,
    PlanName,
    DayName,
    ExercisesParagraph,
    Exercises
} from './NewTrainingStyles';
import {PrimaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../assets/styles/variables';
import NewTrainingExercise from "./NewTrainingExercise/NewTrainingExercise";
import {TrainingsContext} from "../../../contexts/TrainingsContext";
import Timer from "./Timer/Timer";

interface Props {
    onCompleteTraining: () => void;
}

const NewTraining: React.FC<Props> = ({onCompleteTraining}) => {
    const {activeTraining} = useContext(TrainingsContext);
    return (
        <NewTrainingWrapper>
            <Heading>
                <HeadingContent>
                    <HeadingItem>
                        <PlanName>Plan name: <span>{activeTraining.planName && activeTraining.planName}</span></PlanName>
                        <DayName>Day name: <span>{activeTraining.dayName && activeTraining.dayName}</span></DayName>

                    </HeadingItem>
                    <HeadingItem>
                        {/*todo: add dynamic content*/}
                        <ExercisesParagraph>
                            Finished exercises:
                            <span> 0</span>
                        </ExercisesParagraph>
                        <ExercisesParagraph>
                            Exercises:
                            <span> {activeTraining.exercises ? activeTraining.exercises.length : null}</span>
                        </ExercisesParagraph>
                    </HeadingItem>
                    <HeadingItem>
                        <Timer/>
                    </HeadingItem>
                </HeadingContent>
                <PrimaryButton
                    color={variables.yellowPrimary}
                    onClick={() => onCompleteTraining()}
                >
                    Finish
                </PrimaryButton>
            </Heading>
            <Exercises>
                {activeTraining.exercises.map(exercise => (
                    <NewTrainingExercise
                        exercise={exercise}
                        key={exercise._id}
                    />
                ))}

            </Exercises>
        </NewTrainingWrapper>
    )
};

export default NewTraining;