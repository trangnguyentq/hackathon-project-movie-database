const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: { type: String },
    description: { type: String },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    poster: {type: String }

});

MovieSchema.statics.like = function (id) {
    const Movie = mongoose.model('movie');

    return Movie.findById( id )
        .then(movie => {
            ++ movie.likes;
            return movie.save();
        })
}

MovieSchema.statics.dislike = function (id) {
    const Movie = mongoose.model('movie');

    return Movie.findById( id )
        .then(movie => {
            ++ movie.dislikes;
            return movie.save();
        })
}

mongoose.model('movie', MovieSchema );

