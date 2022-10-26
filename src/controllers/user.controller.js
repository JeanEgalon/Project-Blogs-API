const UserService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await UserService.createUser(displayName, email, password, image);

  if (newUser === null) return res.status(409).json({ message: 'User already registered' });

  return res.status(201).json({ token: newUser });
};

module.exports = {
  createUser,
};