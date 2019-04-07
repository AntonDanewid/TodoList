import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export class TodoItem extends Component {

  async removeTodoItem() {
    var respone = await fetch('/removeTodo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'lol',
        todo: this.props.todo

      })
    });
    this.props.updateFunction();
  }

  render() {
    return (
      <div className="mt-2 mb-2 row todo-item">

        <div className="text-right">
          <Button variant="danger" onClick={this.removeTodoItem.bind(this)}>Delete</Button>
        </div>
        {this.props.todo}

      </div>
    )
  }
}

export default TodoItem
