import React from 'react';
import './Todo.css';
import styled from 'styled-components';

const TodoDiv = styled.div`
    background-color: rgba(147, 112, 219, 0.3);
    border: 2px solid rebeccapurple;
    border-radius: 3px;
    padding: 10px 20px;
    margin: 10px auto;
    width: 10rem;
`

const P = styled.p`
    margin: 0;
    text-align: center;
    font-size: 1.1rem;
`

const Todo = props => {
    //render title of todo item
    return (
        <TodoDiv className={`todo${props.todo.completed === true ? ' completed' : ''}`} onClick={() => {props.toggleCompleted(props.todo.id)}}>
            <P>{props.todo.task}</P>
        </TodoDiv>
    )
}

export default Todo;