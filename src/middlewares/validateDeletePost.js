const BlogPostService = require('../services/blogPost.service');
const jwtUtil = require('../utils/jwt.util');

const validateDeletePost = async (req, res, next) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const testToken = jwtUtil.validateToken(authorization);

  const result = await BlogPostService.findUserId(id);
  console.log(testToken, result.dataValues);

  if (result.message) return res.status(404).json({ message: 'Post does not exist' });

  const userId = result.dataValues.user_id;
  if (userId !== testToken.id) return res.status(401).json({ message: 'Unauthorized user' });

  next();
};

module.exports = validateDeletePost;