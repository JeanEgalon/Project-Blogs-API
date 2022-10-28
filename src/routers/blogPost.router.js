const express = require('express');

const router = express.Router();

const BlogPostController = require('../controllers/blogPost.controller');
const validateToken = require('../middlewares/validateToken');
const validateCategoryId = require('../middlewares/validateCategoryId');
const validatePostData = require('../middlewares/validatePostData');

router.post('/post',
  validateToken,
  validatePostData,
  validateCategoryId,
  BlogPostController.blogPostInsert);

router.get('/post', validateToken, BlogPostController.getAll);
router.get('/post/:id', validateToken, BlogPostController.findById);

module.exports = router;