import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import getAMovie from '../queries/getAMovie';
import mutationLike from '../mutations/likeMovie';
import mutationDislike from '../mutations/dislikeMovie';
import './css/movieDetail.css';


class MovieDetail extends Component {
    onLike(id, likes) {
        console.log(this.props);
        this.props.mutationLike({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeMovie: {
                    id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
        });
    }

    onDislike(id, dislikes) {
        console.log(this.props);
        this.props.mutationDislike({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                dislikeMovie: {
                    id,
                    __typename: 'LyricType',
                    dislikes: dislikes + 1
                }
            }
        });
    }
    /*
    renderDetails() {
        console.log(this.props);

            return (
                <div key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                        <i
                            className="material-icons"
                            onClick={() => this.onLike(id, likes)}
                        >
                            thumb_up
                        </i>
                        {likes}
                    </div>
                </div>
            );
    }
    */
    render() {
        console.log(this.props);
        const { movie } = this.props.data;

        if (!movie) { return <div>Loading...</div> }

        return (
            <div>
                <h2 className="movieTitle">{movie.title}</h2>
                <div className="moviePoster">
                  <img src={movie.poster} alt="poster"/>
                </div>
                <div className="movieDesc">{movie.description}</div>
                <div className="vote-box">
                    {movie.likes}
                    <button
                        className="material-icons"
                        onClick={() => this.onLike(movie.id, movie.likes)}
                    >
                    thumb_up
                    </button>

                    <button
                        className="material-icons"
                        onClick={() => this.onDislike(movie.id, movie.dislikes)}
                    >
                    thumb_down
                    </button>
                    {movie.dislikes}
                </div>

            </div>
        );
    }
}



export default graphql(getAMovie, {
    options: (props) => { return { variables: { id: props.params.id } } }
})(
    graphql(mutationLike, {name: 'mutationLike'} )(graphql(mutationDislike, {name: 'mutationDislike'})(MovieDetail))
);
