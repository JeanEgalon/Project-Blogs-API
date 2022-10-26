const jwtUtil = require('../utils/jwt.util');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const user = jwtUtil.validateToken(authorization);
  console.log(user);

  req.user = user;

  next();
};

module.exports = {
  validateToken,
};