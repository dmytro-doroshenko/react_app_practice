import React, {Component} from 'react';
import './Button.css';

function ButtonPlusOne({myFunc}) {

    const plusOne = () => {
        myFunc(1);
    };
    return (
            <button onClick={plusOne}>+1</button>
    );
};

export default ButtonPlusOne;