import usersDao from '../daos/users-dao.js';

const usersController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/limit/:limit', findSomeUsers);
    app.get('/api/users/:id', findUserById);
    app.get('/api/users/username/:username', findUserByUsername);
    app.post('/api/users/credentials', findUserByCredentials);
    app.post('/api/users', createUser);
    app.put('/api/users/:id', updateUser);
    app.delete('/api/users/:id', deleteUser);
}

const findAllUsers = async (req, res) => {
    console.log('inside findAllUsers controller method');
    const users = await usersDao.findAllUsers()
    res.json(users)
}

const findSomeUsers = async (req, res) => {
    const limit = req.params['limit'];
    const users = await usersDao.findSomeUsers(limit);
    res.json(users);
}

const findUserById = async (req, res) => {
    console.log('inside findUserById controller method');
    const userId = req.params['id']
    const user = await usersDao.findUserById(userId)
    if(user) {
        res.json(user)
    } else {
        res.sendStatus(404)
    }
}
const findUserByUsername = async (req, res) => {
    console.log('inside findUserByUsername controller method');
    const username = req.params['username'];
    const user = await usersDao.findUserByUsername(username)
    if(user) {
        res.json(user)
    } else {
        res.sendStatus(404)
    }
}
const findUserByCredentials = async (req, res) => {
    console.log('inside findUserByCredentials controller method');
    const username = req.body['username'];
    const password = req.body['password'];
    const user = await usersDao.findUserByCredentials(
        username, password
   )
    if(user) {
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
}
const createUser = async (req, res) => {
    console.log('inside createUser controller method');
    const user = req.body
    const insertedUser = await usersDao.createUser(user)
    res.json(insertedUser)
}
const updateUser = async (req, res) => {
    console.log('inside updateUser controller method');
    const user = req.body
    const userId = req.params['id']
    const status = await usersDao.updateUser(userId, user)
    console.log('status: ', status);
    res.json(status)
}
const deleteUser = async (req, res) => {
    console.log('inside deleteUser controller method');
    const userId = req.params['id']
    const status = await usersDao.deleteUser(userId)
    res.json(status)
}

export default usersController;