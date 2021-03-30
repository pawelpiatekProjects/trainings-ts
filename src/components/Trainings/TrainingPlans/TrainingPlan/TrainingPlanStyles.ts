import styled from 'styled-components';
import * as variables from '../../../../assets/styles/variables';
import {PrimaryButton} from '../../../../assets/styles/customStylesComponents/buttons'

export const TrainingPlanWrapper = styled.div`
    margin: 0 auto;
    height: 100%;
    padding:  .5rem 0 3rem 0;
    overflow-y: scroll;
    
`;


export const TrainingPlanContent  = styled.div`
    width: 90%;
    margin: 0 auto;
    background: ${variables.light}
`;

export const TrainingPlanContentData = styled.div`
    padding: 3rem;
`;

export const TrainingPlanHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%
`;

export const HeadingButtons = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TrainingPlanHeader = styled.h1`
    font-weight: 400;
    font-size: ${variables.textHeader};
    margin: 0;
    width: 80%;
`;

export const Button = styled(PrimaryButton)`

`;

export const TrainingPlanIntroData = styled.div`

`;

export const TrainingPlanIntroElement = styled.p`
    color: ${variables.textColorTertiary};
    span {
        font-weight: 500;
    }
`;
