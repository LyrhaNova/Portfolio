const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const generateToken = (user) => {
  const { email, _id } = user;

  const payload = {
    userId: _id,
    email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });

  return token;
};

module.exports = { generateToken };
