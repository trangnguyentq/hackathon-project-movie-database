import React, { Component } from 'react';
import './css/logIn.css';


class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div className="input-field email">
            <i className="fas fa-envelope fa-2x"></i>
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field password">
            <i className="fas fa-lock fa-2x"></i>
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value})}
            />
          </div>
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button className="btn submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
