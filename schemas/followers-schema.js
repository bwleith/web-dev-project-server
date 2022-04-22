import mongoose from 'mongoose';

const followersSchema = mongoose.Schema({
    username: String, // follower
    follows: String, // follow-ee
    time: {type: Date, default: Date.now} // when the relationshp was established
}, {collection: 'follows'});

export default followersSchema;