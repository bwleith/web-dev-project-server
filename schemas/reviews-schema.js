import mongoose from 'mongoose';

const reviewsSchema = mongoose.Schema({
    username: String, // foreign key linking review to its author
    imdbId: String, // foreign key linking review to its IMDB information
    title: String, // movie title
    poster: String, // movie poster URL
    time: {type: Date, default: Date.now}, // when the review was created
    review: String, // review text
}, {collection: 'reviews'});

export default reviewsSchema;