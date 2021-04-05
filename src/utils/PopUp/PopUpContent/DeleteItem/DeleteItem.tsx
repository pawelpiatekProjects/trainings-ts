import React from "react";
import {
    DeleteExerciseWrapper,
    DeleteExerciseHeader,
    DeleteExerciseParagraph,
    ButtonsGroup,
    Button
} from './DeleteItemStyle';
import * as variables from '../../../../assets/styles/variables';

const DeleteItem: React.FC = () => {
    return (
        <DeleteExerciseWrapper>
            <DeleteExerciseHeader>Delete exercise</DeleteExerciseHeader>
            <DeleteExerciseParagraph>Are you sure, you want to delete this exercise?</DeleteExerciseParagraph>
            <ButtonsGroup>
                <Button color={variables.errorRed}>Delete</Button>
                <Button color={variables.yellowPrimary}>Cancel</Button>
            </ButtonsGroup>
        </DeleteExerciseWrapper>
    )
};

export default DeleteItem;