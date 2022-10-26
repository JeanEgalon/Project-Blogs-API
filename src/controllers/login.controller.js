const LoginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const result = await LoginService.validateLogin(email, password);

  if (result.type) return res.status(400).json({ message: 'Invalid fields' });

  return res.status(200).json({ token: result });
};

module.exports = {
  login,
};