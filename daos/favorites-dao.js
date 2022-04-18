import favoritesModel from '../models/favorites-model.js';

export const findLatestFavoritesByUsername = (username) => favoritesModel.find({username: username}).sort({time: -1});
export const createFavorite = (favorite) => favoritesModel.create(favorite);
export const deleteFavorite = (favorite) => favoritesModel.deleteOne(favorite);

const favoritesDao = {
    findLatestFavoritesByUsername,
    createFavorite,
    deleteFavorite
};

export default favoritesDao;