import './css/main.css';
import logo from './img/logo.png';
import logOut from './img/logout.png';
import './css/modal.css';
import MovieList from './MovieList';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class Dashboard extends Component {
    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        });
    }

    /*renderButtons() {
        const { loading, user } = this.props.data;

        if (loading) { return <div />; }

        if (user) {
            return (
                <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
            );
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            );
        }
    }*/

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul className="navigation">
                            <li className="mainLogo col-md-2">
                                <img src={logo} alt="logo" />
                            </li>
                            <li className="title col-md-8">
                                <h1>Incluvie</h1>
                            </li>
                            <li className="logOut col-md-2">
                                <a onClick={this.onLogoutClick.bind(this) }><img src={logOut} alt="log out" /></a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <MovieList />

                {/*
  <div className="container">
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Open modal
  </button>

  <div className="modal fade" id="myModal">
  <div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
    </div>

    <div className="modal-body">
    <div className="poster"></div>
    <div className="movieTitle">Example Title</div>
    <div className="movieDesc">example desc</div>
    <div className="comment" placeholder="comment"></div>
      </div>

    <div className="modal-footer">
      <button type="button" className="btn" data-dismiss="modal">Up</button>
        <button type="button" className="btn" data-dismiss="modal">Down</button>

    </div>

  </div>
  </div>
  </div>

  </div>
    */}
                <footer>
                    <div className="social">
                        <a href="#">
                            <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-youtube fa-2x"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter-square fa-2x"></i>
                        </a>
                    </div>
                    <div className="copy">
                        <p>&copy; 2018, made with by Incluvie Hackathon</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default graphql(mutation)(
    graphql(query)(Dashboard)
);


