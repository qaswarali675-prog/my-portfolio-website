const Profile = require('../models/Profile');

// @desc    Get profile
// @route   GET /api/profile
// @access  Public
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create profile
// @route   POST /api/profile
// @access  Private/Admin
const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update profile
// @route   PUT /api/profile
// @access  Private/Admin
const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    
    if (!profile) {
      profile = await Profile.create(req.body);
    } else {
      profile = await Profile.findOneAndUpdate({}, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete profile
// @route   DELETE /api/profile
// @access  Private/Admin
const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    await profile.deleteOne();
    res.json({ success: true, message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
