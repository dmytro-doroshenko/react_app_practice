import React, {Component} from 'react';
import './Button.css';

function ButtonPlusHundred({myFunc}) {

    const plusHundred = () => {
        myFunc(100);
    };

    return (
        <button onClick={plusHundred}>+100</button>
    );
};

export default ButtonPlusHundred;