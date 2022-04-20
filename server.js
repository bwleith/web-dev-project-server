import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import reviewsController from './controllers/reviews-controller.js';
import favoritesController from './controllers/favorites-controller.js';
import usersController from './controllers/users-controller.js';
import authController from './controllers/auth-controller.js';
const app = express();
app.use(cors());
app.use(session({
    secret: 'SECRETO',
    cookie: {secure: false}
}));
app.use(express.json());
reviewsController(app);
favoritesController(app);
usersController(app);
authController(app);
app.listen(4000);
const CONNECTION_STRING = 'mongodb://localhost:27017/project';
mongoose.connect(CONNECTION_STRING);

