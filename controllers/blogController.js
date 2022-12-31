const Blog = require('../models/blogModel')
const mongoose = require('mongoose')

//get all blogs by user id
const getBlogs = async (req, res) => {
    const user_id = req.user._id

    const blogs = await Blog.find({user_id}).sort({createdAt : -1})

    res.status(200).json(blogs)

}

//get all blogs
const getAllBlogs = async (req, res) => {
    const user_id = req.user._id

    const blogs = await Blog.find({}).sort({createdAt : -1})

    res.status(200).json(blogs)

}

// create new blog
const createBlog = async (req, res) => {
    const {title, content} = req.body
  
    let emptyFields = []
  
    if(!title) {
      emptyFields.push('title')
    }
    if(!content) {
      emptyFields.push('content')
    }
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
  
    // add doc to db
    try {
      const user_id = req.user._id
      const blog = await Blog.create({title, content, user_id})
      res.status(200).json(blog)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  
  // delete a workout
  const deleteBlog = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such blog'})
    }
  
    const blog = await Blog.findOneAndDelete({_id: id})
  
    if (!blog) {
      return res.status(400).json({error: 'No such blog'})
    }
  
    res.status(200).json(blog)
  }

  module.exports = {
    getBlogs,
    getAllBlogs,
    createBlog,
    deleteBlog
  }
  

