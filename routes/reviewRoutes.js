const express = require('express');
const reviewController = require('../controllers/reviewController.js');
const authController = require('../controllers/authController.js');

const router = express.Router({ mergeParams: true });

// POST /tour/23fdsd/reviews Nested Routes
// POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  );

module.exports = router;
