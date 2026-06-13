const Education = require('../models/Education');

// @desc    Get all education
// @route   GET /api/education
// @access  Public
const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ endYear: -1 });
    res.json({ success: true, count: education.length, data: education });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single education
// @route   GET /api/education/:id
// @access  Public
const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json({ success: true, data: education });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new education
// @route   POST /api/education
// @access  Private/Admin
const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json({ success: true, data: education });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update education
// @route   PUT /api/education/:id
// @access  Private/Admin
const updateEducation = async (req, res) => {
  try {
    let education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }

    education = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({ success: true, data: education });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete education
// @route   DELETE /api/education/:id
// @access  Private/Admin
const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }

    await education.deleteOne();
    res.json({ success: true, message: 'Education deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
};
