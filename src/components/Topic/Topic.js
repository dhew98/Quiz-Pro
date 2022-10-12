import React from 'react';

import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;



    return (
        <div>
            <div class="card m-5 topic">
                <img src={logo} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Total quiz : {total}.</p>
                    <p className='btn btn-primary w-75 fs-5'> <Link to={`/quiz/${id}`}>Quiz Practise </Link></p>
                </div>
            </div>
        </div >
    );
};

export default Topic;