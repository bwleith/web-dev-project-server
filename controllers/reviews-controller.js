import reviewsDao from '../daos/reviews-dao.js';

const reviewsController = (app) => {
    app.get('/api/reviews', findLatestReviews);
    app.post('/api/reviews', createReview);
    app.delete('/api/reviews/:reviewId', deleteReview);
    app.put('/api/reviews/:reviewId', deleteReview);
}

const findLatestReviews = async (req, res) => {
    const imdbId = req.query.imdbId;
    const username = req.query.username;
    if (imdbId) {
        const reviewsByImdbId = await reviewsDao.findReviewsByImdbId(imdbId);
        res.json(reviewsByImdbId);
        return;
    }
    else if (username) {
        const reviewsByUsername = await reviewsDao.findReviewsByUsername(username);
        res.json(reviewsByUsername);
        return;
    }
    const reviews = await reviewsDao.findLatestReviews();
    res.json(reviews);
}

const createReview = async(req, res) => {
    const review = req.body;
    console.log('inside createReview');
    console.log('review: ', review);
    const status = await reviewsDao.createReview(review);
    res.send(status);
}



const deleteReview = async (req, res) => {
    const reviewIdToDelete = req.params.reviewId;
    const status = await reviewsDao.deleteReview(reviewIdToDelete);
    res.send(status);
}

const updateReview = async (req, res) => {
    const reviewIdToUpdate = req.params.reviewId;
    const updatedReview = req.body;
    const status = await reviewsDao.updateReview(reviewIdToUpdate, updatedReview);
    res.send(status);
}

export default reviewsController;