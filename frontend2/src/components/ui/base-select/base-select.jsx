import classes from './base-select.module.css';

export const BaseSelect = ({options, value, ...props}) => {
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
            {props.children}
        </select>
    );
};