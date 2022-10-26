const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user.controller');
const validadeEmail = require('../middlewares/validateEmail');
const validateName = require('../middlewares/validateName');
const validatePassword = require('../middlewares/validatePassword');

router.post('/user',
  validadeEmail,
  validateName,
  validatePassword,
  UserController.createUser);

module.exports = router;