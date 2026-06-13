const express = require('express');
const router = express.Router();
const {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/profileController');
const { protect, admin } = require('../middleware/auth');
const { validateProfile } = require('../middleware/validation');
const upload = require('../middleware/upload');

router.route('/')
  .get(getProfile)
  .post(protect, admin, upload.fields([{ name: 'profileImage' }, { name: 'cvFile' }]), validateProfile, createProfile)
  .put(protect, admin, upload.fields([{ name: 'profileImage' }, { name: 'cvFile' }]), validateProfile, updateProfile)
  .delete(protect, admin, deleteProfile);

module.exports = router;
