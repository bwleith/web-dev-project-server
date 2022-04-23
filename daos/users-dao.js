import usersModel from '../models/users-model.js';

export const findAllUsers = () => usersModel.find().sort({time: -1});
export const findSomeUsers = (limit) => usersModel.find().limit(limit).sort({time: -1});
export const findUserById = (uid) => usersModel.find({_id: uid});
export const findUserByUsername = (username) => usersModel.findOne( {username: username});
export const findUserByCredentials = (username, password) => usersModel.findOne({username: username, password: password});
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (uid) => usersModel.deleteOne({_id: uid});
export const updateUser = (uid, user) => usersModel.updateOne({_id: uid}, {$set: user});

const usersDao = {
    findAllUsers,
    findSomeUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    createUser,
    deleteUser,
    updateUser
};

export default usersDao;