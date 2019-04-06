import React, { Component } from 'react'

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (eventArgs) => {
    this.setState({
      username: eventArgs.target.username,
      password: eventArgs.target.password

    });
    console.log(eventArgs);
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <input
              type="username"
              name="username"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </div>
          <div className="row">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Login
