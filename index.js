const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const controller = require('./controllers/posts.controller')

mongoose
  .connect(
    'mongodb+srv://cpoclin:cpoclin@main.aakwp.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use('/', controller)

    app.listen(5000, () => {
      console.log('Server has started!')
    })
  })
