const express = require('express');
const router = express.Router();
const {
  getExperience,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers/experienceController');
const { protect, admin } = require('../middleware/auth');
const { validateExperience } = require('../middleware/validation');

router.route('/')
  .get(getExperience)
  .post(protect, admin, validateExperience, createExperience);

router.route('/:id')
  .get(getExperienceById)
  .put(protect, admin, validateExperience, updateExperience)
  .delete(protect, admin, deleteExperience);

module.exports = router;
