const BlogPostService = require('../services/blogPost.service');

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;

  const checkId = await BlogPostService.findAll();
  const lastId = checkId[checkId.length - 1].dataValues.id;

  categoryIds.forEach((id) => {
    if (id > lastId) {
      return res.status(400).json({
        message: 'one or more "categoryIds" not found',
      }); 
    }
  });

  if (!Array.isArray(categoryIds)) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }

  next();
};

module.exports = validateCategoryId;