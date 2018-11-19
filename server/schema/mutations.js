const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');
const MovieType = require('./types/movie_type');
const Movie = mongoose.model('movie');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    },
    addMovie: {
      type: MovieType,
      args: {
        title: { type: GraphQLString },
        poster: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, { title, poster, description }) {
        return (new Movie({ title, poster, description })).save()
      }
    },
    likeMovie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Movie.like( id );
      }
    },
    dislikeMovie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id } ) {
        return Movie.dislike( id );
      }
    }
  }
});

module.exports = mutation;
