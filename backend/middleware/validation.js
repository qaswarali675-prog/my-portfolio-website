const { body, validationResult } = require('express-validator');

// Validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// User validation rules
const validateRegister = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  handleValidationErrors,
];

const validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

// Project validation rules
const validateProject = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('category').isIn(['web', 'iot', 'ai', 'mobile', 'other']).withMessage('Invalid category'),
  handleValidationErrors,
];

// Skill validation rules
const validateSkill = [
  body('name').trim().notEmpty().withMessage('Skill name is required'),
  body('category').isIn(['programming', 'web', 'other']).withMessage('Invalid category'),
  body('percentage').isInt({ min: 0, max: 100 }).withMessage('Percentage must be between 0 and 100'),
  handleValidationErrors,
];

// Education validation rules
const validateEducation = [
  body('degree').trim().notEmpty().withMessage('Degree is required'),
  body('institution').trim().notEmpty().withMessage('Institution is required'),
  body('startYear').isInt().withMessage('Start year must be a number'),
  body('endYear').isInt().withMessage('End year must be a number'),
  handleValidationErrors,
];

// Experience validation rules
const validateExperience = [
  body('company').trim().notEmpty().withMessage('Company is required'),
  body('position').trim().notEmpty().withMessage('Position is required'),
  body('duration').trim().notEmpty().withMessage('Duration is required'),
  handleValidationErrors,
];

// Service validation rules
const validateService = [
  body('title').trim().notEmpty().withMessage('Service title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  handleValidationErrors,
];

// Message validation rules
const validateMessage = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required'),
  handleValidationErrors,
];

// Profile validation rules
const validateProfile = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('profession').trim().notEmpty().withMessage('Profession is required'),
  body('bio').notEmpty().withMessage('Bio is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  handleValidationErrors,
];

module.exports = {
  validateRegister,
  validateLogin,
  validateProject,
  validateSkill,
  validateEducation,
  validateExperience,
  validateService,
  validateMessage,
  validateProfile,
  handleValidationErrors,
};
