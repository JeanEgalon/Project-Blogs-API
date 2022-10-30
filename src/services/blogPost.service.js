const { User, Category, BlogPost, PostCategory } = require('../models');

const createCategory = async (postId, categoryId) => {
  await PostCategory.create({ postId, categoryId });
};

const insert = async (title, content, id) => {
  const createBlogPost = await BlogPost.create({
    title,
    content,
    userId: id,
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

const findUserId = async (id) => {
  const checkId = await BlogPost.findByPk(id);

  if (!checkId) return new Error('id not found');

  return checkId;
};

const updatePost = async (id, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  const result = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

const deletePost = async (userId) => {
  const result = await BlogPost.destroy({ where: { userId } });
  return result;
};

const findOne = async (id) => {
  const result = await BlogPost.findOne({ where: { id } });
  return result;
};

module.exports = {
  insert,
  findAll,
  createCategory,
  getAll,
  findById,
  findUserId,
  updatePost,
  deletePost,
  findOne,
};