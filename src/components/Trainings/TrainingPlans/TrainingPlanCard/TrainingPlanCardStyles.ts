import styled from "styled-components";
import * as variables from '../../../../assets/styles/variables';
import {Link} from "react-router-dom";

export const TrainingPlanCardWrapper = styled.div`
  background: ${variables.light};
  transition: all .3s;

  &:hover {
    background: ${variables.grayPrimary};
    box-shadow: ${variables.dashboardItemBoxShadow};
    transform: scale(1.05);
  }
`;

export const TrainingPlanCardInfoWrapper = styled.div`
  padding: 1rem 3rem 3rem 3rem;
`;

export const TrainingPlanHeader = styled.h1`
  font-weight: 500;
`;

export const Created = styled.p`
color: ${variables.textColorTertiary};
  font-size: ${variables.textSmall};
  span {
    font-weight: 500;
  }
  margin-bottom: 3rem;
`;

export const More = styled(Link)`
  color: ${variables.yellowPrimary};
  text-decoration: none;
  font-size: ${variables.textSmall};
  position: relative;
  
  &:after {
    width: 100%;
    height: 1.5px;
    content: '';
    position: absolute;
    background: ${variables.yellowPrimary};
    bottom: -.3rem;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: all .3s;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
`;

