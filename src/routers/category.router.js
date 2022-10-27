const express = require('express');

const router = express.Router();

const CategoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');

router.use(authMiddleware.validateToken);

router.post('/categories',
  validateName,
  CategoryController.createCategory);

module.exports = router;