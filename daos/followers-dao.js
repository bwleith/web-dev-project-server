import followersModel from '../models/followers-model.js';

// who follows username?
export const getFollowersByUsername = (username) => followersModel.find({follows: username}).sort({time: -1});

// who does username follow?
export const getFollowsByUsername = (username) => followersModel.find({username: username}).sort({time: -1});

// does username follow this person?
export const checkFollows = (follow) => followersModel.findOne(follow);

// make a new follow
export const createFollow = (follow) => followersModel.create(follow);

// delete a follow
export const deleteFollow = (follow) => followersModel.deleteOne(follow);

const followersDao = {
    getFollowersByUsername,
    getFollowsByUsername,
    checkFollows,
    createFollow,
    deleteFollow
}

export default followersDao;
