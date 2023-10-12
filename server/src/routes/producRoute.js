const express=require('express')
const router=express.Router()
const {   createProduct, getProducts, deleteProduct, productDetails, updateProduct, getproductbycategory } = require('../controllers/productController')


const upload=require('../middlewares/file-upload')
const { requireAdmin } = require('../middlewares/userMiddlewares')
router.post('/product/create',requireAdmin, upload.array('productPicture'),createProduct)
router.get('/product/getproduct', getProducts)
router.delete('/deleteproduct/:id', requireAdmin, deleteProduct)
router.get('/productdetails/:id', productDetails)
router.get('/getproductbycategory/:id', getproductbycategory)
router.put('/updateproduct/:id', requireAdmin, upload.array('productPicture'), updateProduct)
module.exports=router