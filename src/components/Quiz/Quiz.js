import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(options)
    return (
        <div className='card-container'>
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">{question}</li>
                <ul class="list-group">
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        First checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Second checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Third checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Fourth checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Fifth checkbox
                    </li>
                </ul>
            </ul>
        </div>
    );
};

export default Quiz;