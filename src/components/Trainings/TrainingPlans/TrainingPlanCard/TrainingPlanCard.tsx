import React from 'react';
import {
    TrainingPlanCardWrapper,
    TrainingPlanCardInfoWrapper,
    TrainingPlanHeader,
    Created,
    More
} from './TrainingPlanCardStyles';
import {TrainingPlanIntro} from "../../../../contexts/TrainingPlansContext";
import {ThemeImage} from '../../../../utils/PopUp/PopUpContent/PlanForm/PlanForm';
import  Dumbbell from '../../../../assets/images/svg/dummbell.svg';
import  LineChart from '../../../../assets/images/svg/line-chart.svg';
import  Heart from '../../../../assets/images/svg/heart.svg';
import  BarChart from '../../../../assets/images/svg/bar-chart.svg';


interface Props {
    plan: TrainingPlanIntro
}


const TrainingPlanCard: React.FC<Props> = ({plan}) => {
    console.log('Plan: ', plan.image);
    let themeImageSrc;

    switch (plan.image) {
        case 'BarChartImg': {
            themeImageSrc = BarChart;
            break;
        }
        case 'Dumbbell': {
            themeImageSrc = Dumbbell;
            break;
        }
        case 'Heart': {
            themeImageSrc = Heart;
            break;
        }
        case 'LineChart': {
            themeImageSrc = LineChart;
            break;
        }
        default : {
            themeImageSrc = Dumbbell;
            break;
        }
    }


    return (
        <TrainingPlanCardWrapper>
            <img src={themeImageSrc} alt='theme image'/>
            <TrainingPlanCardInfoWrapper>
                <TrainingPlanHeader>{plan.name}</TrainingPlanHeader>
                <Created>Created at: <span>{plan.createdAt.slice(0,10)}</span></Created>
                <More
                    to={{pathname: `/trainings/training-plans/${plan._id}`, state: plan._id}}
                    key={plan._id}
                >
                    More
                </More>
            </TrainingPlanCardInfoWrapper>

        </TrainingPlanCardWrapper>
    )
};

export default TrainingPlanCard;
