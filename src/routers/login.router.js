const express = require('express');

const router = express.Router();

const LoginController = require('../controllers/login.controller');
const validateLogin = require('../middlewares/validateLogin');
const authMiddleware = require('../middlewares/validateToken');

router.post('/login', validateLogin, LoginController.login);

router.use(authMiddleware.validateToken);

module.exports = router;