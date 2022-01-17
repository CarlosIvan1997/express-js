const Post = require('../models/post')

const find = async () => {
  return await Post.find()
}

const create = async (title, content) => {
  return await Post.create({ title, content })
}

const findById = async (id) => {
  return await Post.findById(id)
}

module.exports = { find, create, findById }
