const express = require('express');
const router = express.Router();
const {
  getSkills,
  getSkillsByCategory,
  createSkill,
  updateSkill,
  deleteSkill,
} = require('../controllers/skillController');
const { protect, admin } = require('../middleware/auth');
const { validateSkill } = require('../middleware/validation');

router.route('/')
  .get(getSkills)
  .post(protect, admin, validateSkill, createSkill);

router.route('/category/:category')
  .get(getSkillsByCategory);

router.route('/:id')
  .put(protect, admin, validateSkill, updateSkill)
  .delete(protect, admin, deleteSkill);

module.exports = router;
