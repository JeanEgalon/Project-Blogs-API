const { User } = require('../models');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const formatEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (!formatEmail.test(email) || !email) {
    return res.status(400).json(
      { message: '"email" must be a valid email' },
    );
  }

  const checkEmail = await User.findOne({ where: { email } });

  if (checkEmail) {
    return res.status(409).json({ message: 'User already registered' }); 
  }

  next();
};

module.exports = validateEmail;