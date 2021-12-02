import React from 'react';
import classes from './index.module.css';

export const TryInput = (props) => {
    return (
        <input className={classes.tryInput} {...props}/>
    );
};