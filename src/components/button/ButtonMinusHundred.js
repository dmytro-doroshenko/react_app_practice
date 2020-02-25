import React, {Component} from 'react';
import './Button.css';

function ButtonMinusHundred({myFunc}) {

    const minusHundred = () => {
        myFunc(-100);
    };

    return (
            <button onClick={minusHundred}>-100</button>
    );
};

export default ButtonMinusHundred;