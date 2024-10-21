const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const generateToken = (user) => {
  const { email } = user;

  const payload = {
    email,
  };

  const token = jwt.sign(payload, process.env.SECRET_CODE, {
    expiresIn: '24h',
  });

  return token;
};

module.exports = { generateToken };
