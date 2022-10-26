const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const validateLogin = async (email, password) => {
  const findUser = await User.findOne({ where: { email } });
  const findUserPassword = await User.findOne({ where: { password } });

  if (!findUser || !findUserPassword) return null;

  const { password: _, ...userWithoutPassword } = findUser.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

module.exports = {
  validateLogin,
};