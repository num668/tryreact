import React from 'react';
import {TryInput} from '../ui/try-input';
import {TrySelect} from '../ui//try-select';
import classes from './index.module.css';

export const TodoFilter = ({filter, onTodoFilter}) => {
    const handleSetFilterTodo = (filter) => {
        if (onTodoFilter instanceof Function) {
            onTodoFilter(filter);
        }
    }
    return (
        <div className={classes.todoFilter}>
            <TryInput 
                placeholder="Filter"
                value={filter.title}
                onChange={(e) => {
                    handleSetFilterTodo({...filter, title: e.target.value});
                }}
            />
            <TrySelect
                value={filter.done}
                options={[
                    {value: '', title: "do not filter by done"},
                    {value: 'true', title: "show only done"},
                    {value: 'false', title: "show only not done"}
                ]}
                onChange={(e) => {handleSetFilterTodo({...filter, done: e.target.value === ''
                    ?
                        undefined
                    :
                        e.target.value === 'false' ? false : true
                })}}
            />
        </div>
    );
};