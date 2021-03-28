import React from "react";
import PersonalRecords from "./PersonalRecords/PersonalRecords";
import TopNavController from "../Navigation/TopNav/TopNavController";
import {
    DashboardWrapper,
    DashboardContent,
    DashboardRow,
} from './DashboardStyles';

import FirstChart from "./Firstchart/FirstChart";
import LastTraining from "./LastTraining/LastTraining";
import SecondChart from "./SecondChart/SecondChart";


const Dashboard: React.FC = () => {


    return (
        <DashboardWrapper>
            <TopNavController/>
            <DashboardContent>
                <DashboardRow>
                    <PersonalRecords/>
                    <FirstChart/>
                </DashboardRow>
                <DashboardRow>
                    <SecondChart/>
                    <LastTraining/>
                </DashboardRow>
            </DashboardContent>
        </DashboardWrapper>
    )
};

export default Dashboard;
