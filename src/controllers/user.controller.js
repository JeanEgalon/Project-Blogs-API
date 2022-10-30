const UserService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await UserService.createUser(displayName, email, password, image);

  return res.status(201).json({ token: newUser });
};

const getAll = async (_req, res) => {
  const allUsers = await UserService.getAll();
  return res.status(200).json(allUsers);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await UserService.findById(id);

  if (!result) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(result);
};

const deleteUser = async (req, res) => {
  console.log(req.user.id);
  await UserService.deleteUser(req.user.id);
  return res.status(204).end();
};

// teste
module.exports = {
  createUser,
  getAll,
  findById,
  deleteUser,
};