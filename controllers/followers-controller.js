import followersDao from '../daos/followers-dao.js';

const followersController = (app) => {
    app.get('/api/username/:username/followers', getFollowersByUsername);
    app.get('/api/username/:username/follows', getFollowsByUsername);
    app.get('/api/username/:username/follows/:followerName', checkFollows);
    app.post('/api/follows', createFollow);
    app.delete('/api/follows', deleteFollow);
    app.get('/api/follows/:username/reviews', findReviewsByFollows);
}

const getFollowersByUsername = async (req, res) => {
    const username = req.params.username;
    const followers = await followersDao.getFollowersByUsername(username);
    res.json(followers);
}

const getFollowsByUsername = async (req, res) => {
    const username = req.params.username;
    const follows = await followersDao.getFollowsByUsername(username);
    res.json(follows);
}

const checkFollows = async(req, res) => {
    console.log('inside checkFollows');
    const username = req.params.username;
    const followerName = req.params.followerName;
    console.log('username: ', username, 'followedName: ', followerName);
    const status = await followersDao.checkFollows({username: username, follows: followerName});
    res.json(status);
}

const createFollow = async (req, res) => {
    console.log("inside createFollow");
    console.log(req.body);
    const newFollow = req.body;
    const status = await followersDao.createFollow(newFollow);
    res.json(status);
}

const deleteFollow = async (req, res) => {
    console.log("inside deleteFollow controller method");
    const deleteFollow = req.body;
    console.log('deleteFollow: ', deleteFollow);
    const status = await followersDao.deleteFollow(deleteFollow);
    res.json(status);
}

const findReviewsByFollows = async(req, res) => {
    console.log('inside findReviewsByFollows controller method');
    const username = req.params.username;
    console.log('findReviewsByFollows: ', username);
    const status = await followersDao.findReviewsByFollows(username);
    console.log('status: ', status);
    res.json(status);
}

export default followersController;