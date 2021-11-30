import React from 'react';
import classes from './try-input.module.css';

export const TryInput = (props) => {
    return (
        <input className={classes.tryInput} {...props}/>
    );
};