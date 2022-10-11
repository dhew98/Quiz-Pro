import React from 'react';

import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;



    return (
        <div>
            <div className='topic'>
                <img src={logo} alt=""></img>
                <div className='foot'>
                    <h5>{name}</h5>
                    <p className='btn btn-primary'> <Link to={`/quiz/${id}`}>Start Practise </Link></p>
                </div>



            </div>
        </div >
    );
};

export default Topic;