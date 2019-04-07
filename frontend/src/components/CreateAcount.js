import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class CreateAcount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ' ',
        }
    }

    async onSubmit(event) {
        event.preventDefault();
        var respone = await fetch('/createUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password

            })
        });

        console.log("props", this.props);
        this.setState({ value: '', isVisible: false });
    }


    handleInput = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }


    render() {
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
                        <Button className="form-group" variant="primary" onClick={this.onSubmit.bind(this)}>Create account</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateAcount
