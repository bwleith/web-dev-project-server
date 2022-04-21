import favoritesModel from '../models/favorites-model.js';

export const findLatestFavoritesByUsername = (username) => favoritesModel.find({username: username}).sort({time: -1});
export const createFavorite = (favorite) => favoritesModel.create(favorite);
export const deleteFavorite = (favorite) => favoritesModel.deleteOne(favorite);
export const checkFavorite = (favorite) => favoritesModel.findOne(favorite);

const favoritesDao = {
    findLatestFavoritesByUsername,
    createFavorite,
    deleteFavorite,
    checkFavorite
};

export default favoritesDao;