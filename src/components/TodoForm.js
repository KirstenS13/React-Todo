import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    //function for handling TodoForm's state
    inputChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };
    
    submitTodo = e => {
        e.preventDefault();
        this.setState({ todo: '' });
        this.props.addTodo(e, this.state.todo);
    }

    //needs text input and two buttons
    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <label htmlFor='todo'>Add Tasks to your List</label>
                <input 
                    placeholder='Enter your todo task'
                    id='todo'
                    name='todo'
                    value={this.state.todo}
                    onChange={this.inputChanges}
                />
                <button>Add Task</button>
                <button onClick={this.props.clearCompleted}>Clear Completed Tasks</button>
            </form>
        )
    }
}

export default TodoForm;