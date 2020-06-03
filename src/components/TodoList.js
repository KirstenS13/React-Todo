// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

//map over array

const TodoList = props => {
    return (
        <div>
            <p>List of Todo Items</p>
            {props.todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted}/>
                )
            })}
        </div>
    )
}

export default TodoList;