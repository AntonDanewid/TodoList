import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';
import Login from './components/Login';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="col-md-10">
              {/* <AddTodoItem></AddTodoItem>
              <TodoList></TodoList> */}
              <Login></Login>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
