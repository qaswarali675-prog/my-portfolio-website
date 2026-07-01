const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: [true, 'Please provide a degree'],
    trim: true,
  },
  institution: {
    type: String,
    required: [true, 'Please provide an institution'],
    trim: true,
  },
  startYear: {
    type: Number,
    required: [true, 'Please provide start year'],
  },
  endYear: {
    type: Number,
    required: [true, 'Please provide end year'],
  },
  grade: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

educationSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Education', educationSchema, 'education');
