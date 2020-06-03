import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    //needs text input and two buttons

    render() {
        return (
            <form>
                <label htmlFor='taskInput'>Add Tasks to your List</label>
                <input 
                    placeholder='Enter your todo task'
                    id='taskInput'
                />
                <button>Add Task</button>
                <button>Clear Completed Tasks</button>
            </form>
        )
    }
}

export default TodoForm;