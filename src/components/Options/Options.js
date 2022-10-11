import React from 'react';

import './Options.css'

const Options = ({ option }) => {
    return (
        <div >
            <li className="list-group-item fw-semibold">
                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label " for="firstCheckbox">{option}</label>
            </li>
        </div>
    );
};

export default Options;