import likesModel from '../models/likes-model.js';

export const findAllLikes = () => likesModel.find().sort({time: -1});
export const findLikesByReviewId = (reviewId) => likesModel.find({reviewId: reviewId}).sort({time: -1});
export const createLike = (like) => likesModel.create(like);
export const deleteLike = (like) => likesModel.deleteOne(like);

const likesDao = {
    findAllLikes,
    findLikesByReviewId,
    createLike,
    deleteLike
};

export default likesDao;