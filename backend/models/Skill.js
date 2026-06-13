const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a skill name'],
    trim: true,
  },
  category: {
    type: String,
    enum: ['programming', 'web', 'other'],
    required: [true, 'Please provide a skill category'],
  },
  percentage: {
    type: Number,
    required: [true, 'Please provide a skill percentage'],
    min: 0,
    max: 100,
  },
  icon: {
    type: String,
    default: '',
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

skillSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Skill', skillSchema);
