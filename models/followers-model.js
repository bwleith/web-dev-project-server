import mongoose from 'mongoose';
import followersSchema from '../schemas/followers-schema.js';
const followersModel = mongoose.model('followersModel', followersSchema);
export default followersModel;