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
                    <p className='fw-bold fs-5'>{name}</p>
                    <p>Total quiz : {total}</p>
                </div>
                <p className='btn btn-primary w-75 fs-5'> <Link to={`/quiz/${id}`}>Quiz Practise </Link></p>



            </div>
        </div >
    );
};

export default Topic;