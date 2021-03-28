import React from 'react';
import {
    PersonalRecordsWrapper,
    PersonalRecordsHeader,
    PersonalRecordsContent,
    PersonalRecordData,
    PersonalRecord,
    PersonalRecordName,
    PersonalRecordValue,
    PersonalRecordDate
} from './PersonalRecordsStyles';

import {CalendarToday, FitnessCenter, NotificationsNone} from "@material-ui/icons";

const PersonalRecords: React.FC = () => {
    return (
        <PersonalRecordsWrapper>
            <PersonalRecordsHeader>Records</PersonalRecordsHeader>
            <PersonalRecordsContent>
                <PersonalRecordData>
                    <p><NotificationsNone/>Exercise</p>
                    <p><FitnessCenter/>Weight</p>
                    <p><CalendarToday/>Date</p>
                </PersonalRecordData>
                <PersonalRecord>
                    <PersonalRecordName>Bench Press:</PersonalRecordName>
                    <PersonalRecordValue>120kg</PersonalRecordValue>
                    <PersonalRecordDate>22.02.2020</PersonalRecordDate>
                </PersonalRecord>
                <PersonalRecord>
                    <PersonalRecordName>Squat:</PersonalRecordName>
                    <PersonalRecordValue>140kg</PersonalRecordValue>
                    <PersonalRecordDate>22.02.2020</PersonalRecordDate>
                </PersonalRecord>
                <PersonalRecord>
                    <PersonalRecordName>Dead lift:</PersonalRecordName>
                    <PersonalRecordValue>180kg</PersonalRecordValue>
                    <PersonalRecordDate>22.02.2020</PersonalRecordDate>
                </PersonalRecord>
            </PersonalRecordsContent>
        </PersonalRecordsWrapper>
    )
};

export default PersonalRecords;
