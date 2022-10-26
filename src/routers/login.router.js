const express = require('express');

const router = express.Router();

const LoginController = require('../controllers/login.controller');
const validateLogin = require('../middlewares/validateLogin');

router.post('/login', validateLogin, LoginController.login);

module.exports = router;