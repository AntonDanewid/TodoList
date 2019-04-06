import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export class TodoItem extends Component {
  render() {
    return (
      <div className="mt-2">
        <Card>
          <Card.Body>{this.props.todo}</Card.Body>
        </Card>
      </div>
    )
  }
}

export default TodoItem
