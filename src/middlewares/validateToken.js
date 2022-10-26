const jwtUtil = require('../utils/jwt.util');

const checkToken = (token) => {
  if (!token) {
    return { type: 401, message: 'Token not found' };
  }

  const user = jwtUtil.validateToken(token);

  return user;
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const user = checkToken(authorization);
  console.log(user);

  // if (user.type) return res.status(user.type).json(user.message);

  req.user = user;

  next();
};

module.exports = {
  checkToken,
  validateToken,
};