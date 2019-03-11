import React, { Component } from 'react';
import "./App.css";
import Todos from './Todos';
import AddTodo from './AddTodo';
import Navbar from './Navbar';

class App extends Component {
  state = {
    todos: []
  };

  /*We will pas this function as a prop to {this.state.todos} below*/
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  };

  addTodo = (todo) => {
    todo.id = Math.random();

    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });

  };

  render() {
    return (
        <React.Fragment>
          <Navbar/>
      <div className="todo-app container">
        <h4 className="center brown-text">Notes</h4>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
        </React.Fragment>
    );
  }
}

export default App;
