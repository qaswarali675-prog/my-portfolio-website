const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a project title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a project description'],
  },
  technologies: [{
    type: String,
    trim: true,
  }],
  githubLink: {
    type: String,
    trim: true,
  },
  liveDemoLink: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    enum: ['web', 'iot', 'ai', 'mobile', 'other'],
    default: 'web',
  },
  featured: {
    type: Boolean,
    default: false,
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

projectSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Project', projectSchema, 'projects');
