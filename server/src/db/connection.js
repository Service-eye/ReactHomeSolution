const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 50000, 
}) 
.then(()=>console.log('Database Connected Successfully'))
.catch(err=>console.log(err))