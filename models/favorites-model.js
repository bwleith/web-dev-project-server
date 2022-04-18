import mongoose from 'mongoose';
import favoritesSchema from '../schemas/favorites-schema.js';
const favoritesModel = mongoose.model('FavoritesModel', favoritesSchema);
export default favoritesModel;