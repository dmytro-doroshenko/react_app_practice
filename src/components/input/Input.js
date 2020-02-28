import React, {Component} from 'react';
import './Input.css';

function Input({track, change, value}) {

    const trackValue = (number) => {
        track (number);
    };

    const addValue = (event, number) => {
        change (number);
        event.preventDefault()
    };

    return (
        <form onSubmit={(e) => addValue(e, value)} className={'inlineBlock'}>
            <input type="number" placeholder="Enter your number" value = {value} onChange={(event) => trackValue(event.target.value)}/>
            <input type='submit' value='Add' className={'btn'}/>
        </form>
    );
}

export default Input;