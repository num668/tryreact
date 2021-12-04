import classes from './base-button.module.css';

export const BaseButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.tryBtn}>
            {children}
        </button>
    );
};