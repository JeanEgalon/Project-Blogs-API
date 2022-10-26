const express = require('express');
const loginRouter = require('./login.router');
const userRouter = require('./user.router');

const router = express.Router();
router.use(userRouter);
router.use(loginRouter);

module.exports = router;