const Blog=require('../models/blogModel')
exports.createBlog=async(req, res)=>{
    try{
        const {title, content}=req.body
       
        let blog=new Blog({
            title:title,
            content:content,
        })
        if(req.file){
    
            blog.blogPic=req.file.filename
          }
        blog=await blog.save()

        if (!blog){
            return res.status(400).josn({error: 'failed to create the blog.'})
        }
        res.send(blog)

    }
    catch(error){
            console.log(error)
            console.log("sorry, can't create the blog")
            return res.status(400).json({error:err})
    }
}

exports.getBlogs = async (req, res) => {
    try {
        // Find all categories in the database
        const blogs = await Blog.find({});
        if (!blogs || blogs.length==0) {
            return res.status(404).json({ message: 'No blogs found.' });
        }
        // Send the list of categories as a JSON response
        return res.status(200).json( blogs );
      
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Error while getting the list of blogs.' })
    }
}

exports.blogDetails=async(req,res)=>{
    const blog=await Blog.findById(req.params.id)
    
    if(!blog){
        return res.status(400).json({error:"Something went wrong while showing the blog details."})

    }
    res.send(blog)
}

exports.updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const update = {
            title: req.body.title,
            content: req.body.content,
        }
        if (req.file) {
            update.blogPic=process.env.API+'/public/' + req.file.filename
        }

        console.log("Blog ID:", blogId);
        console.log("Update Data:", update);

        const updatedBlog = await Blog.findByIdAndUpdate(blogId, update, { new: true });
        console.log("Updated Blog:", updatedBlog);
        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(updatedBlog);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error });
    }
}

exports.deleteBlog = (req, res) => {
    Blog.findByIdAndRemove(req.params.id)
      .then((blog) => {
        if (!blog) {
          return res.status(400).json({ error: "Blog with that id not found." });
        } else {
          return res.status(200).json({ message: "Blog deleted successfully." });
        }
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  };
  