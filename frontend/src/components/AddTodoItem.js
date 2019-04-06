import React, { Component } from 'react'
import { throws } from 'assert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
    this.setState({ value: '' });
    this.props.updateFunction();
  }




  render() {
    return (
      <div className="container">
        <div className="col-md-10">
          <Card>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <div className="row"></div>
              <Button variant="primary" onClick={this.handleChange}>Add todo</Button>
            </form>
          </Card>
        </div>
      </div>
    )
  }
}

export default AddTodoItem
