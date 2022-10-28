const BlogPostService = require('../services/blogPost.service');

const registerNewCategory = async (categoryIds, postId) => {
  const allCategoriesIds = categoryIds;

  allCategoriesIds.forEach(async (categoryId) => {
    await BlogPostService.createCategory({ categoryId, postId });
  });
};

const blogPostInsert = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const result = await BlogPostService.insert(title, content, categoryIds, authorization);

  await registerNewCategory(categoryIds, result.dataValues.id);

  return res.status(201).json(result);
};

const getAll = async (_req, res) => {
  const result = await BlogPostService.getAll();
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await BlogPostService.findById(id);
  
  if (result.message) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(result);
};

module.exports = {
  blogPostInsert,
  registerNewCategory,
  getAll,
  findById,
};