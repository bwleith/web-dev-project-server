import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import reviewsController from './controllers/reviews-controller.js';
import favoritesController from './controllers/favorites-controller.js';
import usersController from './controllers/users-controller.js';
import authController from './controllers/auth-controller.js';
import followersController from './controllers/followers-controller.js';
import likesController from './controllers/likes-controller.js';
const app = express();
app.use(cors({
        credentials: true,
        origin: 'http://localhost:3000'
    }));
app.use(session({
    secret: 'SECRETO',
    cookie: {secure: false}
}));
app.use(express.json());
reviewsController(app);
favoritesController(app);
usersController(app);
authController(app);
followersController(app);
likesController(app);
app.listen(4000);
const CONNECTION_STRING = 'mongodb://localhost:27017/project';
mongoose.connect(CONNECTION_STRING);

