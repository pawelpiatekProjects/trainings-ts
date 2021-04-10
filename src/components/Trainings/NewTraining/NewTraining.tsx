import React from "react";
import {
    NewTrainingWrapper,
    Heading,
    HeadingContent,
    HeadingItem,
    PlanName,
    DayName,
    ExercisesParagraph,
    Timer,
    Exercises
} from './NewTrainingStyles';
import {PrimaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../assets/styles/variables';
import NewTrainingExercise from "./NewTrainingExercise/NewTrainingExercise";

const NewTraining: React.FC = () => {
    return (
        <NewTrainingWrapper>
            <Heading>
                <HeadingContent>
                    <HeadingItem>
                        <PlanName>Plan name: <span>FBW1</span></PlanName>
                        <DayName>Day name: <span>Day A</span></DayName>

                    </HeadingItem>
                    <HeadingItem>
                        <ExercisesParagraph>Finished exercises: <span>2</span></ExercisesParagraph>
                        <ExercisesParagraph>Exercises to do: <span>2</span></ExercisesParagraph>
                    </HeadingItem>
                    <HeadingItem>
                        <Timer>
                            <p>0:25:33</p>
                        </Timer>
                    </HeadingItem>
                </HeadingContent>
                <PrimaryButton color={variables.yellowPrimary}>Finish</PrimaryButton>
            </Heading>
            <Exercises>
                <NewTrainingExercise/>
            </Exercises>
        </NewTrainingWrapper>
    )
};

export default NewTraining;