import React, {Component} from 'react';
import './Button.css';

function ButtonMinusOne({myFunc}) {

    const minusOne = () => {
        myFunc(-1);
    };

    return (
            <button onClick={minusOne}>-1</button>
    );
};

export default ButtonMinusOne;