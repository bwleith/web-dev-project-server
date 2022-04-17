import reviewsModel from '../models/reviews-model.js';

export const findLatestReviews = () => reviewsModel.find();
export const findReviewsByImdbId = (imdbId) => reviewsModel.find({imdbId: imdbId});
export const createReview = (review) => reviewsModel.create(review);
export const deleteReview = (reviewId) => reviewsModel.deleteOne({_id: reviewId});
export const updateReview = (reviewId, review) => reviewsModel.updateOne({_id: reviewId}, {$set: review});

const reviewsDao = {
    findLatestReviews,
    findReviewsByImdbId,
    createReview,
    deleteReview,
    updateReview
};

export default reviewsDao;