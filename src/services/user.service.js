const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createUser = async (displayName, email, password, image) => {
  const newUserId = await User.create({ displayName, email, password, image });
  const newUser = await User.findOne({ where: { id: newUserId.dataValues.id } });

  const { password: _, ...userWithoutPassword } = newUser.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const findById = async (id) => {
  const users = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return users;
};

const deleteUser = async (id) => {
  const deletedUser = await User.destroy({ where: { id } });
  return deletedUser;
};

module.exports = {
  createUser,
  getAll,
  findById,
  deleteUser,
};