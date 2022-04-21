import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    username: String,
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    role: {type: String, default: 'Fan'},
    email: {type: String, default: ''},
    password: String,
    time: {type: Date, default: Date.now}, // when the user joined
    bio: {type: String, default: ''}
}, {collection: 'users'});
export default usersSchema;