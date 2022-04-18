import mongoose from 'mongoose';

const favoritesSchema = mongoose.Schema({
    username: String, // foreign key linking review to its author
    imdbId: String, // foreign key linking review to its IMDB information
    title: String, // movie title
    poster: String, // movie poster URL
    time: {type: Date, default: Date.now} // when the movie was added to favorites
}, {collection: 'favorites'});

export default favoritesSchema;