import likesDao from '../daos/likes-dao.js';

const likesController = (app) => {
    app.get('/api/likes', findAllLikes);
    app.get('/api/likes/:reviewId', findLikesByReviewId);
    app.post('/api/likes', createLike);
    app.delete('/api/likes', deleteLike);
}

const findAllLikes = async (req, res) => {
    const likes = await likesDao.findAllLikes();
    res.json(likes);
}

const findLikesByReviewId = async (req, res) => {
    const reviewId = req.params.reviewId;
    const likes = await likesDao.findLikesByReviewId(reviewId);
    res.json(likes);
}

const createLike = async (req, res) => {
    const like = req.body;
    console.log('creating like: ', like);
    const status = await likesDao.createLike(like);
    res.json(status);
}

const deleteLike = async (req, res) => {
    const like = req.body;
    console.log('deleting like: ', like);
    const status = await likesDao.deleteLike(like);
    res.json(status);
}

export default likesController;