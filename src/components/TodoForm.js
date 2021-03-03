import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.3rem;
`

const Label = styled.label`
    padding: 10px;
`

const Input = styled.input`
    background-color: rgba(147, 112, 219, 0.3);
    padding: 10px;
    margin: 10px;
    border: 2px solid rebeccapurple;
    border-radius: 3px;
    font-size: 0.9rem;
    color: indigo;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Button = styled.button`
    background-color: rgba(147, 112, 219, 0.3);
    border: 2px solid rebeccapurple;
    border-radius: 3px;
    padding: 7px;
    margin: 10px;
    width: 10rem;
    font-size: 1rem;
    color: indigo;
`

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
            <Form onSubmit={this.submitTodo}>
                <Label htmlFor='todo'>Task:
                    <Input 
                        placeholder='Enter task...'
                        id='todo'
                        name='todo'
                        value={this.state.todo}
                        onChange={this.inputChanges}
                    />
                </Label>
                <ButtonContainer>
                    <Button>Add Task</Button>
                    <Button onClick={this.props.clearCompleted}>Clear Completed</Button>
                </ButtonContainer>
            </Form>
        )
    }
}

export default TodoForm;