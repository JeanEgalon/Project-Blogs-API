const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user.controller');
const validateToken = require('../middlewares/validateToken');
const validadeEmail = require('../middlewares/validateEmail');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validatePassword = require('../middlewares/validatePassword');

router.post('/user',
  validadeEmail,
  validateDisplayName,
  validatePassword,
  UserController.createUser);

router.get('/user', validateToken, UserController.getAll);
router.get('/user/:id', validateToken, UserController.findById);
router.delete('/user/me', validateToken, UserController.deleteUser);

module.exports = router;