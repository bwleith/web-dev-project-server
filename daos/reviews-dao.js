import reviewsModel from '../models/reviews-model.js';

export const findLatestReviews = () => reviewsModel.aggregate([
    {$lookup: {from: "likes",
               localField: "_id",
               foreignField: "_reviewId",
               as: "likes"
        }},
    {$sort: {time: -1}}
    ]);

export const findReviewsByImdbId = (imdbId) => reviewsModel.aggregate([
    {$match: {"imdbId": imdbId}},
    {$lookup: {from: "likes",
            localField: "_id",
            foreignField: "_reviewId",
            as: "likes"
        }},
    {$sort: {time: -1}}
]);

export const findReviewsByUsername = (username) => reviewsModel.aggregate([
    {$match: {"username": username}},
    {$lookup: {from: "likes",
            localField: "_id",
            foreignField: "_reviewId",
            as: "likes"
        }},
    {$sort: {time: -1}}
]);

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