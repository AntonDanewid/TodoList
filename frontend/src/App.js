import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Authentication from './components/Authentication'
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

            {/* <AddTodoItem></AddTodoItem>
              <TodoList></TodoList> */}
            <BrowserRouter>
              <ul>
              </ul>
              <Switch>
                {/* <Route path="/" component={Authentication(TodoList)} /> */}
                <Route path="/login" component={Login} />
                <Route path="/" component={Authentication(TodoList)} />
              </Switch>
            </BrowserRouter>

          </div>
        </header>
      </div>
    );
  }
}

export default App;
