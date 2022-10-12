import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = useLoaderData();
    const topics = data.data;

    console.log(topics);


    return (
        <div className='chart-container'>
            <h3>Total Quizes per Topic</h3>
            <ResponsiveContainer width="50%" height={350} className='chart'>
                <LineChart data={topics} >
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;