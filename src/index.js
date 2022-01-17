const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const controller = require('./controllers/posts.controller')

require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URI || '', { useNewUrlParser: true })
  .then(() => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use('/', controller)

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Listening on ${process.env.PORT || 5000}!`)
    })
  })
