import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/getMovies';
import './css/main.css';

class MovieList extends Component {


  renderMovies() {
    console.log(this.props);

    return this.props.data.movies.map(({ id, title, poster }) => {
      return (

        <div key={id} className="collection-item col-md-3">
            <Link to={`/movies/${id}`}  >
                <img className="carouselImg" src={poster} alt="Image"  />
            </Link>
        </div>

      );
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }

    return (
      <div>
        <section>
        
        <div id="demo" className="carousel slide" data-ride="carousel" data-interval="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {this.renderMovies()}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {this.renderMovies()}
            </div>
          </div>
        </div>
        </div>
        </section>

      </div>
    );
  }
}

export default graphql(query)(MovieList);
