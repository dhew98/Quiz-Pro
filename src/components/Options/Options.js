import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Options.css'

const Options = ({ option, correctAnswer }) => {

    const isCorrect = () => {
        if (option === correctAnswer) {
            toast("Correct Answer!");
        }
        else {
            toast("Wrong Answer!");
        }
    }
    return (
        <div>

            <div className='options'>

                <li className="list-group-item fw-semibold ">

                    <input onClick={isCorrect} className="form-check-input me-1" type="radio" name="firstradio" value="" id="firstCheckbox" />
                    <label className="form-check-label " for="firstCheckbox">{option}</label>
                </li>

            </div>
        </div>

    );
};

export default Options;