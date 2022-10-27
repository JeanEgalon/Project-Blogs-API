const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/validateToken');
const validadeEmail = require('../middlewares/validateEmail');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validatePassword = require('../middlewares/validatePassword');

router.post('/user',
  validadeEmail,
  validateDisplayName,
  validatePassword,
  UserController.createUser);

router.use(authMiddleware.validateToken);

router.get('/user', UserController.getAll);
router.get('/user/:id', UserController.findById);

module.exports = router;