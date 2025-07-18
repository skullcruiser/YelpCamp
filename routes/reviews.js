const express = require('express');
const router = express.Router({mergeParams:true});
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/AppError');
const { reviewSchema } = require('../schemas.js');
const Campground = require('../models/campground');
const Review = require('../models/review')
const { validateReview, isLoggedIn, isReviewAuthor} = require('../middleware')
const reviews = require('../controllers/review.js')

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.postReview));
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;