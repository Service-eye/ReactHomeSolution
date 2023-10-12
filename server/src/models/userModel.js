const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:6,
        max:30,
    },
    userName:{
        type:String,
       
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
       
    },
    password:{
        type:String,
        required:true,

    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
        // required:true

    },
    contactNumber:{
        type:String,

    },
    profilePicture:{
        type:String
    },
    isVerified:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})


module.exports=mongoose.model('User', userSchema);
