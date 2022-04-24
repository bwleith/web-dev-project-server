import mongoose from 'mongoose';
import likesSchema from '../schemas/likes-schema.js';
const likesModel = mongoose.model('likesModel', likesSchema);
export default likesModel;