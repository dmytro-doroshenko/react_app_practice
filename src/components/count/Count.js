import React, {Component} from 'react';
import './Count.css';

function Count({count}) {
    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    );
}

export default Count;