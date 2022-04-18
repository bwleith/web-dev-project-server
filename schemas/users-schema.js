import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    role: String,
    email: String,
    password: String,
    bio: String
}, {collection: 'users'});
export default usersSchema;