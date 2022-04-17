import usersDao from '../daos/users-dao.js';

const findAllUsers = async (req, res) => {
    const users = await usersDao.findAllUsers();
    res.json(users);
}

const deleteUser = async (req, res) => {
    const userIdToDelete = req.params.uid;
    const status = await usersDao.deleteUser(uid);
    res.send(status);
}

const updateUser = async (req, res) => {
    const uidToUpdate = req.params.uid;
    const updatedUser = req.body;
    const status = await usersDao.updateUser(uidToUpdate, updatedUser);
    res.send(status);
}