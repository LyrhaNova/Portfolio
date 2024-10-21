const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hashSync(password, 10);

  return encryptedPassword;
};

const comparePassword = (password, dbPassword) => {
  const isPasswordMatch = bcrypt.compareSync(password, dbPassword);

  return isPasswordMatch;
};

module.exports = { encryptPassword, comparePassword };
