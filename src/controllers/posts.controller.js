const express = require('express')
const service = require('../services/posts.service')

const controller = express.Router()

controller.get('/', async (req, res) => {
  res.send('Hello there, this is an express app.')
})

controller.get('/posts', async (req, res) => {
  const posts = await service.find()
  res.send(posts)
})

controller.post('/posts', async (req, res) => {
  const post = await service.create(req.body.title, req.body.content)
  res.send(post)
})

controller.get('/posts/:id', async (req, res) => {
  try {
    const post = await service.findById(req.params.id)
    res.send(post)
  } catch {
    res.status(404).send({ error: "Post doesn't exist!" })
  }
})

module.exports = controller
