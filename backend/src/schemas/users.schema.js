const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  accessToken: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model('users', userSchema);
