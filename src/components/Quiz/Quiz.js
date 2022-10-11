import React from 'react';
import Options from '../Options/Options';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(options)
    return (
        <div className='card-container'>
            <ul className="list-group">
                <li className="list-group-item active fs-5 fw-bold" aria-current="true">{question}</li>
                <ul className="list-group">

                    {
                        options.map(option => <Options option={option}>

                        </Options>)
                    }
                </ul>
            </ul>
        </div>
    );
};

export default Quiz;