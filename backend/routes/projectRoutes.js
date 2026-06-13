const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const { protect, admin } = require('../middleware/auth');
const { validateProject } = require('../middleware/validation');
const upload = require('../middleware/upload');

router.route('/')
  .get(getProjects)
  .post(protect, admin, upload.single('image'), validateProject, createProject);

router.route('/:id')
  .get(getProject)
  .put(protect, admin, upload.single('image'), validateProject, updateProject)
  .delete(protect, admin, deleteProject);

module.exports = router;
