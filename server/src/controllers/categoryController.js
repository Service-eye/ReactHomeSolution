const Category=require('../models/categoryModel')
const Product=require('../models/productModel')
const slugify=require('slugify')

const createCategories=(categories, req,parentId=null)=>{
  const categoryList=[];
  let category;

  if(parentId==null){
    category=  categories.filter(cat=>cat.parentId==undefined)
  }
  else{
    category=categories.filter(cat=>cat.parentId==parentId)
  }

  for (let cats of category){
    categoryList.push({
      _id:cats._id,
      name:cats.name,
      slug:cats.slug,
      parentId:cats.parentId,
      children:createCategories(categories,req, cats._id)

    })
  }
  

  
  return categoryList;
}

exports.addCategory = async (req, res) => {
  try {
   
    // Extract category data from the request body
    const { name, parentId } = req.body;

    // Create a slug for the category
    const slug = slugify(name);

    // Create a new category
    const category = new Category({ name, slug });

    // If parentId is provided, set it
    if (parentId) {
      category.parentId = parentId;
    }

    // Save the category to the database
    const savedCategory = await category.save();

    if (savedCategory) {
      return res.status(201).json({success:true, message:"category created successfully", category: savedCategory });
    } else {
      return res.status(201).json({ message: "Failed to create category" });
    }
  } 
  catch (error) {
    return res.status(400).json({ message: "Error while adding category", error: error.message });
  }
};


exports.getCategories = async (req, res) => {
    try {
        // Find all categories in the database
        const categories = await Category.find({});

        if (!categories) {
            return res.status(404).json({ message: 'No categories found.' });
        }
        // Send the list of categories as a JSON response
        const categoryList=createCategories(categories, req);
        return res.status(200).json({ categoryList });
      
    }
    catch (error) {
        console.log(error)
        return res.status(404).json({ message: 'Error while getting the list of category.' })
    }
}

// to show single data
exports.categoryDetails = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(400).json({ error: "Something went wrong...could not get the details of this category" });
  }
  res.send(category);
};

// update category.
exports.updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    { new: true } // jun update vako xa tyai aaune banauna.
  );
  if (!category) {
    return res.status(400).json({ error: "Something went wrong..." });
  }
  res.send(category);
};

// delete category
exports.deleteCategory = (req, res) => {
    Category.findByIdAndRemove(req.params.id)
      .then((category) => {
        if (!category) {
          return res
            .status(400)
            .json({ error: "Category with that id no found." });
        } else {
          return res.status(200).json({ message: "Category deleted." });
        }
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  };
