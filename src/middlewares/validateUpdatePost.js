const BlogPostService = require('../services/blogPost.service');
const jwtUtil = require('../utils/jwt.util');

const validateUpdatePost = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { authorization } = req.headers;

  const testToken = jwtUtil.validateToken(authorization);

  const result = await BlogPostService.findUserId(id);
  const userId = result.dataValues.id;

  if (userId !== testToken.id) return res.status(401).json({ message: 'Unauthorized user' });

  if (!title || !content) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    }); 
  } 

  next();
};

module.exports = validateUpdatePost;