import React from 'react';

import TodoForm from './components/TodoForm';
//only import TodoList because Todo is rendered from TodoList
import TodoList from './components/TodoList';

//test data
/* const todos = [
  {
    task: 'Clean Room',
    id: 1234567890,
    completed: false
  },
  {
    task: 'Read Instructions',
    id: 1987654321,
    completed: false
  }
]; */

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //state is set in constructor
  constructor() {
    super();
    this.state = {
      todos: []
    };
  };

  //all handler functions go below this line

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
