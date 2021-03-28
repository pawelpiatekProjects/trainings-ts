import styled from "styled-components";
import * as variables from '../../assets/styles/variables';
import backgroundImg from '../../assets/images/png/dashboard-background-large.png';


export const DashboardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
`;

export const DashboardHeader = styled.h1`
  font-weight: 500;
  margin: 0;
  border-bottom: 3px solid ${variables.yellowPrimary}; 
  padding-bottom: .5rem;
 
`;

export const DashboardContent = styled.div`
  padding: 0 3rem;
`;

 export const GlassmorphismContainer = styled.div`

background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4.5px );
-webkit-backdrop-filter: blur( 4.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const DashboardRow = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;




