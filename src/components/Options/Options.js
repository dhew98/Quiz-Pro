import React from 'react';

import './Options.css'

const Options = ({ option }) => {
    return (
        <div className='options'>
            <li className="list-group-item fw-semibold ">

                <input className="form-check-input me-1" type="radio" name="firstradio" value="" id="firstCheckbox" />
                <label className="form-check-label " for="firstCheckbox">{option}</label>
            </li>

        </div>
    );
};

export default Options;