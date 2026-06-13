const express = require('express');
const router = express.Router();
const {
  getEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} = require('../controllers/educationController');
const { protect, admin } = require('../middleware/auth');
const { validateEducation } = require('../middleware/validation');

router.route('/')
  .get(getEducation)
  .post(protect, admin, validateEducation, createEducation);

router.route('/:id')
  .get(getEducationById)
  .put(protect, admin, validateEducation, updateEducation)
  .delete(protect, admin, deleteEducation);

module.exports = router;
