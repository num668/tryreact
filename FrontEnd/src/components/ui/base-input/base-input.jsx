import classes from './base-input.module.css';

export const BaseInput = (props) => {
    return (
        <input className={classes.tryInput} {...props}/>
    );
};