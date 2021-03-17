import React from 'react';
import styled from 'styled-components';
import TopNav from "../Navigation/TopNav/TopNav";

const TrainingsWrapper = styled.div`

`;

const Trainings: React.FC = () => {
    return (
        <TrainingsWrapper>
            <TopNav/>
            <p>trainings</p>
        </TrainingsWrapper>
    )
};

export default Trainings;
