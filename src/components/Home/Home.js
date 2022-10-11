import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'


const Home = () => {
    const data = useLoaderData();
    const topics = data.data;
    console.log(topics)
    return (
        <div className='home-container'>
            <div className="topics-container">
                {
                    topics.map(topic => <Topic key={topic.id}
                        topic={topic}>
                    </Topic>)
                }
            </div>
        </div>
    );
};

export default Home;