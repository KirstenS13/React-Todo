// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const P = styled.p`
    margin: 0;
    padding: 10px 0;
    font-size: 1.3rem;
    text-align: center;
`

//map over array
const TodoList = props => {
    return (
        <div>
            <P>To-Do List</P>
            {props.todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted}/>
                )
            })}
        </div>
    )
}

export default TodoList;