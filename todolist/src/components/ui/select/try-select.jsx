import React from 'react';
import classes from './try-select.module.css';

export const TrySelect = ({options, value, children, ...props}) => {
    const handleOptionsFill = () => {
        if (Array.isArray(options)) {
            return options.map((option, index) => {
                return <option key={index} value={option.value}>{option.title}</option>;
            });
        }
    }
    return (
        <select className={classes.trySelect} value={value} {...props}>
            {handleOptionsFill()}
            {children}
        </select>
    );
};