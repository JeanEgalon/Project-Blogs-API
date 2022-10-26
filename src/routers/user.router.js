const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/validateToken');
const validadeEmail = require('../middlewares/validateEmail');
const validateName = require('../middlewares/validateName');
const validatePassword = require('../middlewares/validatePassword');

router.post('/user',
  validadeEmail,
  validateName,
  validatePassword,
  UserController.createUser);

router.use(authMiddleware.validateToken);

router.get('/user', UserController.getAll);

module.exports = router;