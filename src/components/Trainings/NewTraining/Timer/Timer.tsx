import React, {useContext} from "react";
import {TimerWrapper} from './TimerStyles';
import {TrainingsContext} from "../../../../contexts/TrainingsContext";

const Timer: React.FC = () => {

    const {trainingTimer} = useContext(TrainingsContext);
    const hours = Math.floor(trainingTimer / 3600);
    const minutes = Math.floor(trainingTimer / 60);
    return (
        <TimerWrapper>
            <p>{hours}:{minutes}</p>
        </TimerWrapper>
    )
};

export default Timer;