import styled from "styled-components";
import * as variables from '../../assets/styles/variables';
import backgroundImg from '../../assets/images/png/dashboard-background-large.png';
import {textMedium} from "../../assets/styles/variables";

export const DashboardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
`;

export const DashboardContent = styled.div`
  padding: 3rem;
`;

 export const GlassmorphismContainer = styled.div`

background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5.0px );
-webkit-backdrop-filter: blur( 5.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const DashboardRow = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  //align-items: center;
`;

export const ChartWrapper = styled(GlassmorphismContainer)`
  //height: 10rem;
  width: 55%;
`;


