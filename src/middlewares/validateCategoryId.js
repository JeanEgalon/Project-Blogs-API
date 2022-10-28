const BlogPostService = require('../services/blogPost.service');

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;

  const checkId = await BlogPostService.findAll();
  const ids = checkId.map((item) => item.dataValues.id);
  const lastId = ids[ids.length - 1];

  if (categoryIds[0] > lastId || categoryIds[1] > lastId) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    }); 
  } 

  // categoryIds.forEach((id) => {
  //   if (id > lastId) {
  //     return res.status(400).json({
  //       message: 'one or more "categoryIds" not found',
  //     }); 
  //   }
  // });

  if (!Array.isArray(categoryIds)) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }

  next();
};

module.exports = validateCategoryId;