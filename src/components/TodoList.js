// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './components/Todo';

const TodoList = props => {
    return (
        <div>
            <p>List of Todo Items</p>
            <Todo />
        </div>
    )
}

export default TodoList;