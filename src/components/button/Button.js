import React, {Component} from 'react';
import './Button.css';

function Button({change, reset}) {

    const changeCounter = (n) => {
        change(n);
    };

    const resetCounter = () => {
        reset();
    };

    return (
        <div className={'inlineBlock'}>
            <button onClick={changeCounter.bind(null, 1)}>+1</button>
            <button onClick={changeCounter.bind(null, -1)}>-1</button>
            <button onClick={changeCounter.bind(null, 100)}>+100</button>
            <button onClick={changeCounter.bind(null, -100)}>-100</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
};

export default Button;