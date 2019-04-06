import React, { Component } from 'react'

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInput = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(eventArgs) {
    console.log("The state is ", this.state.username);
    var outer;
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        outer = res;
        console.log("The status is ", res);
        if (res.status === 200) {
          this.props.history.push('/');
          console.log("LOGGED IN!");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        console.log("what happend ", outer);
        alert('Error logging in please try again');
      });
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
