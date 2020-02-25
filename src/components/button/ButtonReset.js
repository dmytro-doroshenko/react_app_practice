import React, {Component} from 'react';
import './Button.css';

function ButtonReset({myFunc}) {

    const resetCounter = () => {
        myFunc();
    };
    return (
            <button onClick={resetCounter}>Clear</button>
    );
};

export default ButtonReset;