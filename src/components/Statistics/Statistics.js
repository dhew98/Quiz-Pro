import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = useLoaderData();
    const topics = data.data;

    console.log(topics);


    return (
        <div>
            <h1>Chart</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={600} height={300} data={topics} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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