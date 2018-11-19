import React from 'react';
import './css/first.css';
import logo from './img/logo.png'
import { Link } from 'react-router';


class Landing extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="logInBody">
        <header className="logo">
          <img src={logo} alt="logo"></img>
        </header>
        <main>
          <Link to={`/signup`} className="signUpLink"><button className="signUp">Sign Up</button></Link>
          <Link to={`/login`} className="logInLink"><button className="logIn">Log In</button></Link>
        </main>



      </div>
    )
  }

};

export default Landing;
