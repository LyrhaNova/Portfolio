const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  largeDescription: {
    required: true,
    type: String,
  },
  techs: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
  github: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model('projects', projectsSchema);
