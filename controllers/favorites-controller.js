import favoritesDao from '../daos/favorites-dao.js';


const favoritesController = (app) => {
    app.get('/api/favorites/:username', findLatestFavoritesByUsername);
    app.get('/api/favorites/:username/movies/:imdbId', checkFavorite);
    app.post('/api/favorites', createFavorite);
    app.delete('/api/favorites', deleteFavorite);
}

const findLatestFavoritesByUsername = async (req, res) => {
    const username = req.params.username;
    const favorites = await favoritesDao.findLatestFavoritesByUsername(username);
    res.json(favorites);
}

const createFavorite = async (req, res) => {
    console.log(req.body);
    const newFavorite = req.body;
    const status = await favoritesDao.createFavorite(newFavorite);
    res.json(status);
}

const deleteFavorite = async (req, res) => {
    const deleteFavorite = req.body;
    console.log('deleteFavorite: ', deleteFavorite);
    const status = await favoritesDao.deleteFavorite(deleteFavorite);
    res.json(status);
}

const checkFavorite = async(req, res) => {
    const username = req.params.username;
    const imdbId = req.params.imdbId;
    const favorite = {
        username: username,
        imdbId: imdbId
    };
    console.log('checking for favorite: ', favorite);
    const status = await favoritesDao.checkFavorite(favorite);
    console.log('status ', status);
    res.json(status);
}

export default favoritesController;