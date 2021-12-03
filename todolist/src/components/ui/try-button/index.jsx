import React from 'react';
import classes from './index.module.css';

export const TryButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.tryBtn}>
            {children}
        </button>
    );
};