const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = mongoose.model('Post', postSchema)
