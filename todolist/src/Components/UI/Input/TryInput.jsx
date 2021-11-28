import React from 'react';
import classes from './TryInput.module.css';

function TryInput (props) {
    return (
        <input className={classes.tryInput} {...props}/>
    );
};

export default TryInput;