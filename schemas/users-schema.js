import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    role: String,
    email: String,
    password: String,
    time: {type: Date, default: Date.now}, // when the user joined
    bio: String
}, {collection: 'users'});
export default usersSchema;