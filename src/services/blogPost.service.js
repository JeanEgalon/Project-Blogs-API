const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User, Category, BlogPost, PostCategory } = require('../models');

const createCategory = async (data) => {
  await PostCategory.create(data);
};

const insert = async (title, content, categoryIds, authorization) => {
  const getUserId = jwt.verify(authorization, process.env.JWT_SECRET);
  const createBlogPost = await BlogPost.create({
    title,
    content,
    userId: getUserId.data.id,
  });

  return createBlogPost;
};

const findAll = async () => {
  const result = await Category.findAll();
  return result;
};

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });

  return result;
};

const findById = async (id) => {
  const checkId = await BlogPost.findByPk(id);

  if (!checkId) return new Error('id not found');

  const result = await BlogPost.findOne({
    attributes: { exclude: ['user_id'] },
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password', 'user_id'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });

  return result;
};

module.exports = {
  insert,
  findAll,
  createCategory,
  getAll,
  findById,
};