import React from "react";
import {
    FirstChartWrapper,
    FirstChartHeader,
    ChartContent
} from './FirstChartstyles';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import * as variables from "../../../assets/styles/variables";


const FirstChart: React.FC = () => {
    const data = [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];
    return (

            <FirstChartWrapper>
                <FirstChartHeader>Statistics</FirstChartHeader>
                <ChartContent>
                    <ResponsiveContainer>
                        <BarChart
                            style={{zIndex: 1}}
                            data={data}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="pv" fill={variables.graySecondary}/>
                            {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContent>
            </FirstChartWrapper>

    )
};

export default FirstChart;
