import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Chart = ({charData}) => {
    const chartDataRes = use(charData).data;
    
    const chartRealData = chartDataRes.map(studentData => {
        const chartRealData = {
            id: studentData.id,
            name: studentData.name,
            math: studentData.subjects.math,
            physics: studentData.subjects.physics,
            higherMath:studentData.subjects.physics
        }
        const avg = (studentData.subjects.math + studentData.subjects.physics + studentData.subjects.physics) / 3;
        chartRealData.avg = avg;


        return chartRealData;
    })

    
    return (
        <div>
            <BarChart width={600} height={500} data={chartRealData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='math' fill='#8884d8'></Bar>
                <Bar dataKey='physics' fill='#82ca9d'></Bar>

            </BarChart>
        </div>
    );
};

export default Chart;