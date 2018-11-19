import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { Link, hashHistory } from 'react-router';
import query from '../queries/getMovies';
import mutation from '../mutations/addMovie';

class MovieCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            poster: ''
        };

    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        this.props.mutate({
            variables: {
                title: this.state.title,
                description: this.state.description,
                poster: this.state.poster
            },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push('/library'));
    }

    render() {
        return (
            <div>
                <h3>Add a New Movie</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Movie Title:</label>
                    <input
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    />
                    <label>Movie Description:</label>
                    <input
                        onChange={event => this.setState({ description: event.target.value })}
                        value={this.state.description}
                    />
                    <label>Movie Poster:</label>
                    <input
                        onChange={event => this.setState({ poster: event.target.value })}
                        value={this.state.poster}
                    />
                    <button> Add Movie </button>
                </form>
            </div>
        );
    }
}



export default graphql(mutation)(MovieCreate);