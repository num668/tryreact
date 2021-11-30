import React from 'react';
import {TryInput} from './ui/input/try-input.jsx';
import {TrySelect} from './ui/select/try-select.jsx';

export const TodoFilter = ({filterTodo, setFilterTodo, ...props}) => {
    const handleSetFilterTodo = (filter) => {
        if (setFilterTodo instanceof Function) {
            setFilterTodo(filter);
        }
    }
    return (
        <div>
            <TryInput 
                placeholder="Filter"
                value={filterTodo.title}
                onChange={(e) => {handleSetFilterTodo({...filterTodo, title: e.target.value})}}
            />
            <TrySelect
                value={filterTodo.done}
                options={[
                    {value: '', title: "do not filter by done"},
                    {value: 'true', title: "show only done"},
                    {value: 'false', title: "show only not done"}
                ]}
                onChange={(e) => {handleSetFilterTodo({...filterTodo, done: e.target.value === ''
                    ?
                        undefined
                    :
                        e.target.value === 'false' ? false : true
                })}}
            />
        </div>
    );
};