const users = [];

import usersDao from '../daos/users-dao.js';

const authController = (app) => {
    app.post('/api/signup', signup);
    app.post('/api/profile', profile);
    app.post('/api/signin', login);
    app.post('/api/logout', logout);
    app.get('/api/users', findUsers);
}

const signup = async (req, res) => {
    console.log('inside signup controller method');
    const credentials = req.body;
    const existingUser = await usersDao.findUserByUsername(credentials.username)
    if (existingUser) {
        console.log('user already exists??');
        console.log(existingUser);
        return res.sendStatus(403)
    } else {
        const newUser = await usersDao.createUser(credentials)
        if (req.session) { // wrapping this in an if block while I test API methods with Postman
            req.session['profile'] = newUser
        }
        res.json(newUser)
    }
}

const login = async (req, res) => {
    const credentials = req.body;
    const profile = await usersDao
        .findUserByCredentials(credentials.username, credentials.password)
    if (profile) {
        req.session['profile'] = profile;
        res.json(profile);
        return;
    }
    res.sendStatus(403);
}

const profile = (req, res) => {
    const profile = req.session['profile']
    if(profile) {
        res.json(profile)
    } else {
        res.sendStatus(503)
    }
}

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
}

const findUsers = (req, res) => {
    res.json(users);
}

export default authController;
