const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Please provide a company name'],
    trim: true,
  },
  position: {
    type: String,
    required: [true, 'Please provide a position'],
    trim: true,
  },
  duration: {
    type: String,
    required: [true, 'Please provide duration'],
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

experienceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Experience', experienceSchema);
