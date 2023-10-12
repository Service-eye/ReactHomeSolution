const express = require('express');
const router=express.Router()

const { createBlog, deleteBlog, getBlogs, blogDetails, updateBlog } = require('../controllers/blogController');

const upload= require('../middlewares/file-upload');
const { requireAdmin } = require('../middlewares/userMiddlewares');

router.post('/createblog',requireAdmin , upload.single('blogPic') ,createBlog)
router.delete('/deleteblog/:id', requireAdmin, deleteBlog)
router.get('/bloglist', getBlogs)
router.get('/blogdetails/:id', blogDetails)
router.put('/updateblog/:id' , upload.single('blogPic'), updateBlog)

module.exports = router;
