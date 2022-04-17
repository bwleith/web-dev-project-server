import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import reviewsController from './controllers/reviews-controller.js';
const app = express();
app.use(cors());
app.use(express.json());
reviewsController(app);
app.listen(4000);
const CONNECTION_STRING = 'mongodb://localhost:27017/project';
mongoose.connect(CONNECTION_STRING);

