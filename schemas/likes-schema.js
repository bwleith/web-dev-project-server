import mongoose from 'mongoose';

const likesSchema = mongoose.Schema({
    username: String, // foreign key linking like to its author
    _reviewId: mongoose.Schema.Types.ObjectId,
    time: {type: Date, default: Date.now}
}, {collection: 'likes'});

export default likesSchema;