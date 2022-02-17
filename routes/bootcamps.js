const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');
const router = express.Router();

//normal /api/v1/bootcamps routes 
router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp)

//ID i.e /api/v1/bootcamps/:id routes
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)

// router.route('/').get(get)

module.exports = router;
