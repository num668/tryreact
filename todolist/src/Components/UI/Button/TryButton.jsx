import React from 'react';
import classes from './TryButton.module.css';

function TryButton ({children, ...props}) {
    return (
        <button {...props} className={classes.tryBtn}>
            {children}
        </button>
    );
};

export default TryButton;