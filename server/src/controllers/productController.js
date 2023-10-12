const multer=require('multer')
const shortid=require('shortid')
const Product=require('../models/productModel')
const Category=require('../models/categoryModel')
const { default: slugify } = require('slugify')


exports.createProduct=async(req,res)=>{
    try{
        const {name, price,quantity, description, category}=req.body
        let productPictures=[];
        if (req.files.length>0){
            productPictures=req.files.map(file=>{
                return {img:file.filename}
            });
        }
       
        const product =new Product({
         name:name,
         slug:slugify(name),
         price,
         quantity,
         description,
         productPictures,
         category
        });
        const savedProduct=await product.save()
        if(savedProduct){
         return res.status(201).json({success:true, message:"product created successfully.", product:savedProduct})
        }
        else{
         return res.status(201).json({message:'Failed to create product.'})
        }
    }
    catch(error){
        return res.status(400).json({message:'Error while adding the product', error:error.message})
    } 
}


exports.getProducts = async (req, res) => {
    try {
        // Find all categories in the database
        const products = await Product.find({}).populate("category", "name");

        if (!products) {
            return res.status(201).json({ message: 'No products found.' });
        }

       
        return res.status(200).json({ products });
      
    }
    catch (error) {
        return res.status(400).json({ message: 'Error while getting the list of products.' })
    }
}

exports.productDetails=async(req,res)=>{
    const product=await Product.findById(req.params.id)
    .populate('category','name')
    if(!product){
        return res.status(400).json({error:"Something went wrong while showing the product details."})

    }
    res.send(product)
}


exports.updateProduct=async(req,res)=>{
    try{
        const productId=req.params.id
        const update={
            name:req.body.name,
            price:req.body.price,
            quantity:req.body.quantity,
            category:req.body.category,
            description:req.body.description
    }
    if(req.files){
        update.productPicture=req.files.path
    }

    const updatedProduct=await Product.findByIdAndUpdate(productId,update,{new:true})
    if(!updatedProduct){
        return res.status(201).json({message:"Product not found"})
    }
    res.json(updatedProduct)

    }
    catch(error){
        console.log(error)
        return res.status(400).json({error:error})
    }
}

exports.getproductbycategory=async(req,res)=>{
    try {
        let childCategoryIds=[]
        id=req.params.id
        const category=await Category.findById(id)
        if(!category){
            return res.status(200).json({message:"category not found"})
        }
        const childCategory=await Category.find({parentId:id}).select("_id").exec();
        if(childCategory)
        {
            childCategoryIds = childCategory.map((category)=>{
            return category._id
            })
        }
        childCategoryIds.push(id)
        // return res.json({childCategoryIds})
        // return res.status(400).json({message:"child not found"})
        const product=await Product.find({category:{$in:childCategoryIds}})
        if(!product){
            return res.status(200).json({message:"product not found"})
        }
        return res.status(200).json({product})
    } catch (error) {
        res.status(400).json({error:error,message:"Something went wrong "})
    }
}

exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
      .then((product) => {
        if (!product) {
          return res.status(200).json({ error: "Product with that id not found." });
        } else {
          return res.status(200).json({ message: "Product deleted successfully." });
        }
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  };