import favoritesDao from '../daos/favorites-dao.js';


const favoritesController = (app) => {
    app.get('/api/favorites/:username', findLatestFavoritesByUsername);
    app.post('/api/favorites', createFavorite);
    app.delete('/api/favorites', deleteFavorite);
}

const findLatestFavoritesByUsername = async (req, res) => {
    const username = req.params.username;
    const favorites = await favoritesDao.findLatestFavoritesByUsername(username);
    res.json(favorites);
}

const createFavorite = async (req, res) => {
    console.log("inside createFavorite");
    console.log(req.body);
    const newFavorite = req.body;
    const status = await favoritesDao.createFavorite(newFavorite);
    res.json(status);
}

const deleteFavorite = async (req, res) => {
    console.log("inside deleteFavorite controller method");
    const deleteFavorite = req.body;
    console.log('deleteFavorite: ', deleteFavorite);
    const status = await favoritesDao.deleteFavorite(deleteFavorite);
    res.json(status);
}

export default favoritesController;