import React, {Component} from 'react';
import './Input.css';

function Input({myFunc, value}) {

    const readValue = (number) => {
        myFunc (number);
    }

    return (
        <div>
            <input type="number" placeholder="Enter your number" value = {value} onChange={(event) => readValue(event.target.value)}/>
        </div>
    );
}

export default Input;