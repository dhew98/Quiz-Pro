import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'
import { ToastContainer } from 'react-toastify';


const Quizes = () => {
    const data = useLoaderData();
    const { name, total } = data.data;
    const quizes = data.data.questions;
    console.log(quizes)
    return (
        <div>
            <ToastContainer></ToastContainer>


            <div className="quiz-container ">
                <div>
                    <h1> Quiz of <span className='text-danger'>{name}</span></h1>
                    <h4>Total quiz : {total}</h4>
                </div>

                {
                    quizes.map(quiz =>
                        <Quiz key={quiz.id} quiz={quiz}></Quiz>
                    )

                }
            </div>
        </div>
    );
};

export default Quizes;