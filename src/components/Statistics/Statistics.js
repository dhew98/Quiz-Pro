import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = useLoaderData();
    const topics = data.data;

    console.log(topics);


    return (
        <div >
            <h1>Chart</h1>

            <LineChart width={600} height={300} data={topics} className='chart'>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>

        </div>
    );
};

export default Statistics;