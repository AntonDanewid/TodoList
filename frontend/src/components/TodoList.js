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

  render() {
    return (
      <div className="containter">
        <div className="col-md-8">
          <AddTodoItem updateFunction={this.updateList.bind(this)}></AddTodoItem>
          {this.state.todoList.map(todo => <TodoItem todo={todo} updateFunction={this.updateList.bind(this)}></TodoItem>)}
        </div>
      </div>
    )
  }
}

export default TodoList
