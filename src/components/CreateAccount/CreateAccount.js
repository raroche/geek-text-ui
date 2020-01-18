import React, { Component } from "react";
import axios from "axios";
import "./CreateAccount.css";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      nickname: "",
      password: "",
      verifyPassword: "",
      registerError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  submitRegister = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      nickname
    } = this.state;
    axios
      .post("https://geek-text-team9.herokuapp.com/api/users/", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
        nickname: nickname
      })
      .then(response => {
        if (response.status === 200) {
          this.props.handleSuccessfulAccount(response.config.data); //fix bug. data appears under config.data instead of data
        }
        console.log("Registration reponse.", response);
      })
      .catch(error => {
        console.log("Registration error.", error);
      });
  };

  render() {
    return (
      <div className="inner-container">
        <div className="header">Create Account</div>

        <form className="box" onSubmit={this.submitRegister}>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
              className="login-input"
              placeholder="John"
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
              className="login-input"
              placeholder="Smith"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              className="login-input"
              placeholder="jsmith@gmail.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
              className="login-input"
              placeholder="Username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              id="nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
              required
              className="login-input"
              placeholder="Nickname"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              className="login-input"
              placeholder="Password"
            />
          </div>

          {/* <div className="input-group">
                            <label htmlFor="verifyPassword">Verify Password</label>
                            <input 
                                type="password" 
                                id="verifyPassword" 
                                value={this.state.verifyPassword}
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Verify Password"/>
                        </div> */}

          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
