import React, {useContext} from "react";
import {ExerciseDescriptionWrapper, ExerciseDescriptionHeader, ExerciseDescriptionText} from './ExerciseDescriptionStyles';
import {PopUpContext} from "../../../../contexts/PopUpContext";

const ExerciseDescription: React.FC = () => {
    const {popUpConfig} = useContext(PopUpContext);

    return (
        <ExerciseDescriptionWrapper>
            <ExerciseDescriptionHeader>Description</ExerciseDescriptionHeader>
            <ExerciseDescriptionText>{popUpConfig.openModalData.message}</ExerciseDescriptionText>
        </ExerciseDescriptionWrapper>
    )
};

export default ExerciseDescription;