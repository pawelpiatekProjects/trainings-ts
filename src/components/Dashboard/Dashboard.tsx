import React, {useRef, useEffect} from "react";
import PersonalRecords from "./PersonalRecords/PersonalRecords";
import {
    DashboardWrapper,
    DashboardContent,
    DashboardRow,
    SideNavWrapper
} from './DashboardStyles';

import FirstChart from "./FirstChart/FirstChart";
import LastTraining from "./LastTraining/LastTraining";
import SecondChart from "./SecondChart/SecondChart";
import SideNavLeftController from "../Navigation/SideNavLeft/SideNavLeftController";


const Dashboard: React.FC = () => {


    return (
        <DashboardWrapper>
            <SideNavWrapper>
                <SideNavLeftController/>
            </SideNavWrapper>
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
