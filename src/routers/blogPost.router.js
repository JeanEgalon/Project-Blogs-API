const express = require('express');

const router = express.Router();

const BlogPostController = require('../controllers/blogPost.controller');
const validateToken = require('../middlewares/validateToken');
const validateUpdatePost = require('../middlewares/validateUpdatePost');
const validateCategoryId = require('../middlewares/validateCategoryId');
const validatePostData = require('../middlewares/validatePostData');
const validateDeletePost = require('../middlewares/validateDeletePost');

router.post('/post',
validateToken,
validatePostData,
validateCategoryId,
BlogPostController.blogPostInsert);

router.get('/post/search', validateToken, BlogPostController.getByTerm);

router.get('/post', validateToken, BlogPostController.getAll);
router.get('/post/:id', validateToken, BlogPostController.findById);
router.put('/post/:id', validateToken, validateUpdatePost, BlogPostController.updatePost);
router.delete('/post/:id', validateToken, validateDeletePost, BlogPostController.deletePost);

module.exports = router;