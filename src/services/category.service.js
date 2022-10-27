const { Category } = require('../models');

const createCategory = async (name) => {
  const newUserId = await Category.create({ name });
  const newUser = await Category.findOne({ where: { id: newUserId.dataValues.id } });

  return newUser;
};

const getAll = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
  createCategory,
  getAll,
};