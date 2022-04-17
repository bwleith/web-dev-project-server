import mongoose from 'mongoose';
import reviewsSchema from '../schemas/reviews-schema.js';
const reviewsModel = mongoose.model('ReviewsModel', reviewsSchema);
export default reviewsModel;