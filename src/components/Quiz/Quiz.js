import React from 'react';
import { useState } from 'react';
import Options from '../Options/Options';
import './Quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';


const Quiz = ({ quiz }) => {
    const [answer, setanswer] = useState("")
    const { question, options, correctAnswer } = quiz;
    console.log(quiz)
    const showAnswer = () => {
        setanswer(correctAnswer)
    }
    return (
        <div className='card-container '>
            <ul className="list-group ">
                <div className='head bg-primary text-white'>
                    <div>
                        <li className="list-group-item active fs-5 fw-bold" aria-current="true">{question} </li>
                    </div>
                    <div>
                        <button onClick={showAnswer} className='btn text-white' type=""><FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>


                <ul className="list-group">

                    {
                        options.map(option => <Options correctAnswer={correctAnswer} option={option}>

                        </Options>)
                    }
                </ul>

                {answer && <li className="list-group-item list-group-item-success fs-5 fw-bold " > Correct Answer : {answer} </li>}

            </ul>
        </div>
    );
};

export default Quiz;