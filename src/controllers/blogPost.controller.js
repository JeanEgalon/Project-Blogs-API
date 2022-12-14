const jwt = require('jsonwebtoken');
const BlogPostService = require('../services/blogPost.service');
require('dotenv').config();

const registerNewCategory = async (categoryIds, postId) => {
  await Promise.all(categoryIds.map(async (categoryId) => {
    await BlogPostService.createCategory(postId, categoryId);
  }));
};

const blogPostInsert = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const { id } = jwt.verify(authorization, process.env.JWT_SECRET).data;

  const result = await BlogPostService.insert(title, content, id);

  await registerNewCategory(categoryIds, result.dataValues.id);

  return res.status(201).json(result);
};

const getAll = async (_req, res) => {
  const result = await BlogPostService.getAll();
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await BlogPostService.findById(id);
  
  if (result.message) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(result);
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const result = await BlogPostService.updatePost(id, title, content);
  return res.status(200).json(result);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  await BlogPostService.deletePost(id);

  return res.status(204).end();
};

const getByTerm = async (req, res) => {
  const { q } = req.query;

  const getTerm = await BlogPostService.getByTerm(q);

  return res.status(200).json(getTerm);
};

module.exports = {
  blogPostInsert,
  registerNewCategory,
  getAll,
  findById,
  updatePost,
  deletePost,
  getByTerm,
};