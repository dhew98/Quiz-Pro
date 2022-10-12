import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'
import { ToastContainer, toast } from 'react-toastify';


const Quizes = () => {
    const data = useLoaderData();
    const quizes = data.data.questions;
    console.log(quizes)
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="quiz-container ">
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