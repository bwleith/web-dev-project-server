import reviewsModel from '../models/reviews-model.js';

export const findLatestReviews = () => reviewsModel.find().sort({time: -1});
export const findReviewsByImdbId = (imdbId) => reviewsModel.find({imdbId: imdbId}).sort({time: -1});
export const findReviewsByUsername = (username) => reviewsModel.find({username: username}).sort({time: -1});
export const createReview = (review) => reviewsModel.create(review);
export const deleteReview = (review) => reviewsModel.deleteOne(review);
export const updateReview = (reviewId, review) => reviewsModel.updateOne({_id: reviewId}, {$set: review});

const reviewsDao = {
    findLatestReviews,
    findReviewsByImdbId,
    findReviewsByUsername,
    createReview,
    deleteReview,
    updateReview
};

export default reviewsDao;