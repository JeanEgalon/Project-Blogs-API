const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const validateLogin = async (email, password) => {
  const findUser = await User.findOne({ where: { email } });

  if (findUser === null) return { type: 'error' };

  const findUserPassword = await User.findOne({ where: { password } });

  if (!findUser || !findUserPassword) return null;

  const { password: _, ...findUserWithoutPassword } = findUser.dataValues;

  const token = jwtUtil.createToken(findUserWithoutPassword);

  return token;
};

module.exports = {
  validateLogin,
};