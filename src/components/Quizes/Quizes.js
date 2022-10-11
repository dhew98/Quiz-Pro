import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const data = useLoaderData();
    const quizes = data.data.questions;
    console.log(quizes)
    return (
        <div>
            <div className="quiz-container">
                {
                    quizes.map(quiz =>
                        <Quiz key={quiz.id} quiz={quiz}>

                        </Quiz>
                    )

                }
            </div>
        </div>
    );
};

export default Quizes;