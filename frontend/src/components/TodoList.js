import React, { Component } from 'react'
import TodoItem from './TodoItem';

export class TodoList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  async componentDidMount() {
    var response = await fetch("/getTodos?username=lol");
    var todos = await response.json();
    this.setState({ todoList: todos });
    console.log("Got state")
    console.log(todos);
  }

  render() {
    return (
      <div className="containter">
        <div className="col-md-8">
          {this.state.todoList.map(todo => <TodoItem todo={todo}></TodoItem>)}
        </div>
      </div>
    )
  }
}

export default TodoList
