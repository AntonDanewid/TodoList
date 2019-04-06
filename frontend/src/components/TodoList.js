import React, { Component } from 'react'
import TodoItem from './TodoItem';
import AddTodoItem from './AddTodoItem';

export class TodoList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    this.getItemsFromAPI();
  }

  async getItemsFromAPI() {
    var response = await fetch("/getTodos?username=lol");
    var todos = await response.json();
    this.setState({ todoList: todos });
    console.log("Got state")
    console.log(todos);
  }

  updateList() {
    this.getItemsFromAPI();
  }

  signOut(event) {

  }

  render() {
    return (
      <div className="containter">
        <div className="col-md-10">
          <div className="text-left">
            <button onClick={this.signOut.bind(this)}>Sign out</button>
          </div>
          {this.state.todoList.map(todo => <TodoItem todo={todo} updateFunction={this.updateList.bind(this)}></TodoItem>)}
          <AddTodoItem updateFunction={this.updateList.bind(this)}></AddTodoItem>

        </div>
      </div>
    )
  }
}

export default TodoList
