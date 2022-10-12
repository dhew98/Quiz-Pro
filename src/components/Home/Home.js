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
            {/* <div className='home-header'>
                <div class="card text-bg-dark">
                    <img src="3.jpg" class="card-img img-fluid" alt="..." />
                    <div class="card-img-overlay mt-5 ">
                        <div className='dev'>
                            <h5 class="card-title"><span className='fs-1 fw-bold text-pro'>Quiz pro</span> is a platform</h5>
                            <p class="card-text"><h5>Which helps you practise the basic questions of </h5>
                                <h5> <span className='fs-4 fw-bold text-danger'>React,JS,Git </span>and <span className='fs-4 fw-bold text-danger'>CSS</span>  which make you a profession web development</h5>
                                <h5>Since this quizes make you pro so this platform is named Quiz pro</h5></p>
                        </div>


                    </div>
                </div>
            </div> */}

            <div className="topics-container">
                <div class="card-group">
                    {
                        topics.map(topic => <Topic key={topic.id}
                            topic={topic}>

                        </Topic>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Home;