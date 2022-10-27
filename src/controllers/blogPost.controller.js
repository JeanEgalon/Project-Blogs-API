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

module.exports = {
  blogPostInsert,
  registerNewCategory,
};