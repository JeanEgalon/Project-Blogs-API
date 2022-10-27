const express = require('express');

const router = express.Router();

const BlogPostController = require('../controllers/blogPost.controller');
const validateToken = require('../middlewares/validateToken');
const validateCategoryId = require('../middlewares/validateCategoryId');
const validatePostData = require('../middlewares/validatePostData');

router.post('/post',
  validateToken,
  validateCategoryId,
  validatePostData,
  BlogPostController.blogPostInsert);

module.exports = router;