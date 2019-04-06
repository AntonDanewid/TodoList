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
            <div className="col-md-10">
              {/* <AddTodoItem></AddTodoItem>
              <TodoList></TodoList> */}
              <BrowserRouter>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/secret">Secret</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
                <Switch>
                  <Route path="/secret" component={Authentication(TodoList)} />
                  <Route path="/login" component={Login} />
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
