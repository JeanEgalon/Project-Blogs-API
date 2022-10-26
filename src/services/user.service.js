const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createUser = async (displayName, email, password, image) => {
  const newUserId = await User.create({ displayName, email, password, image });
  const newUser = await User.findOne({ where: { id: newUserId.dataValues.id } });

  const { password: _, ...userWithoutPassword } = newUser.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

module.exports = {
  createUser,
};