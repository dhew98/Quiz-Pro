import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { question, option } = quiz;
    return (
        <div>
            <div className="card card-container" >
                <div className="card-header">
                    {question}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
            </div>
        </div>
    );
};

export default Quiz;