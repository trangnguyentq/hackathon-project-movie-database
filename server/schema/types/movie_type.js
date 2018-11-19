const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt } = graphql;
const Movie = mongoose.model('movie');

const MovieType = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        poster: {type: GraphQLString },
        likes: { type: GraphQLInt },
        dislikes: { type: GraphQLInt }
    })
});

module.exports = MovieType;