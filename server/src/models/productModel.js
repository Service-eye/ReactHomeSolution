const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    slug:{
        type:String,
        // required:true,
        unique:true,

    },
    price:{
        type:Number,
        required:true

    },
    quantity:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:5000,
    },
    offers:{
        type:Number,
    },
    productPictures:[
        {img:{
            type:String,
            required:true

        }
    }
    ],
    reviews: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            review: String,
        },
    ],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand"
    },

    updatedAt:Date


}, {timestamps:true})

module.exports=mongoose.model('Product', productSchema)