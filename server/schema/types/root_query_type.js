const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLList } = graphql;
const UserType = require('./user_type');
const MovieType = require('./movie_type');
const Movie = mongoose.model('movie');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find({});
      }
    },
    movie: {
      type: MovieType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Movie.findById(id);
      }
    }

  }
});

module.exports = RootQueryType;
