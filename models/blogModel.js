const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true
    },
    user_id: {
        type: String,
        required : true
    }
  }, { timestamps: true })

  module.exports = mongoose.model('Blog', blogSchema)
