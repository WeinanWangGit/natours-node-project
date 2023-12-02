const express = require('express');
const reviewController = require('../controllers/reviewController.js');
const authController = require('../controllers/authController.js');

const router = express.Router({ mergeParams: true });

// POST /tour/23fdsd/reviews Nested Routes
// GET /tour/23fdsd/reviews
// POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview,
  );

router
  .route('/:id')
  .get(reviewController.getReviews)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
