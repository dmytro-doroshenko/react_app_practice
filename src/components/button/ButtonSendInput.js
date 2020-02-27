import React, {Component} from 'react';
import './Button.css';

function ButtonSendInput ({number, myFunc}) {

    const setCounter = (number) => {
        myFunc(number)
    }

    return (
            <button onClick={() => setCounter(number)}>OK</button>
    );

}

export default ButtonSendInput;