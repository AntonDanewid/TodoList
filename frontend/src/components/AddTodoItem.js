import React, { Component } from 'react'
import { throws } from 'assert';


export class AddTodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    var respone = await fetch('/addTodo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'lol',
        todo: this.state.value

      })
    });


    console.log("props", this.props);
    this.props.updateFunction();
  }




  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddTodoItem
