const express = require('express')
const router = express.Router()

const { addCategory, getCategories, updateCategory, categoryDetails, deleteCategory } = require('../controllers/categoryController')

const upload=require('../middlewares/file-upload')
const { requireAdmin } = require('../middlewares/userMiddlewares')

router.post('/category/create',requireAdmin, upload.single('categoryImage'),addCategory)
router.get('/category/getcategory',getCategories)
router.get('/categorydetails/:id',categoryDetails)
router.put('/updatecategory/:id', requireAdmin, upload.single('categoryImage'),updateCategory)
router.delete('/deletecategory/:id', requireAdmin,deleteCategory)

module.exports = router;