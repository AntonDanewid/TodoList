import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import CreateAccount from './CreateAcount';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      createAccount: false
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
    eventArgs.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/');

        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
  }

  setSignUp(event) {
    this.setState({ createAccount: !this.state.createAccount });
  }

  render() {
    if (!this.state.createAccount) {
      return (
        <div className="login-form">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="form-group">
                <input
                  class="form-control"
                  type="username"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className="row">
              <Button className="form-group" variant="primary" onClick={this.onSubmit.bind(this)}>Login</Button>
              <Button className="form-group" variant="primary" onClick={this.setSignUp.bind(this)}>Signup</Button>

            </div>
          </form>
        </div>
      )
    } else {
      return <CreateAccount></CreateAccount>
    }
  }
}

export default Login
