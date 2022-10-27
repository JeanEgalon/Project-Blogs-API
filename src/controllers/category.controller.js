const CategoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await CategoryService.createCategory(name);

  return res.status(201).json(newCategory);
};

const getAll = async (_req, res) => {
  const allCategories = await CategoryService.getAll();

  return res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAll,
};