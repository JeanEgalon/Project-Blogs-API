const express = require('express');
const loginRouter = require('./login.router');
const categoryRouter = require('./category.router');
const userRouter = require('./user.router');
const blogPostRouter = require('./blogPost.router');

const router = express.Router();

router.use(loginRouter);
router.use(blogPostRouter);
router.use(categoryRouter);
router.use(userRouter);

module.exports = router;