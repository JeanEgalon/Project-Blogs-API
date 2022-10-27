const express = require('express');

const router = express.Router();

const CategoryController = require('../controllers/category.controller');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');

router.post('/categories',
  validateToken,
  validateName,
  CategoryController.createCategory);

router.get('/categories',
  validateToken,
  CategoryController.getAll);

module.exports = router;