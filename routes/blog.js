const express = require('express')
const {
    createBlog,
    deleteBlog,
    getAllBlogs,
    getBlogs
} = require('../controllers/blogController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

//GET all blogs
router.get('/all', getAllBlogs)

//GET blogs belongs to logged in user
router.get('/', getBlogs)

//DELETE a blog
router.delete('/:id', deleteBlog)

//POST blog
router.post('/', createBlog)

module.exports = router


