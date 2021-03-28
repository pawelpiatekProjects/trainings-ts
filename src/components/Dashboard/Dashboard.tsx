import React from "react";
import PersonalRecords from "./PersonalRecords/PersonalRecords";
import TopNavController from "../Navigation/TopNav/TopNavController";
import {
    DashboardWrapper,
    DashboardContent,
    DashboardRow
} from './DashboardStyles';
import FirstChart from "./FirstChart/FirstChart";

const Dashboard: React.FC = () => {

    return (
        <DashboardWrapper>
            <TopNavController/>
            <DashboardContent>
                <DashboardRow>
                    <PersonalRecords/>
                    <FirstChart/>
                </DashboardRow>

            </DashboardContent>
        </DashboardWrapper>
    )
};

export default Dashboard;
