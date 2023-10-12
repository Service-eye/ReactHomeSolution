// const express=require('express')
// const app=express()

// require('dotenv').config()
// require('./db/connection')

// const morgan=require('morgan')
// const bodyParser=require('body-parser')
// const cors=require('cors')

// const path=require('path')
// const fs=require('fs')





const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
dotenv.config()
require('./db/connection')
// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/public',express.static(path.join(__dirname,'uploads')))

const uploadsDirectory = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDirectory)) {
    fs.mkdirSync(uploadsDirectory);
}

// routes setup
const blogRoute=require('./routes/blogRoute')
const categoryRoute=require('./routes/categoryRoute')
const productRoute=require('./routes/producRoute')
const userRoute=require('./routes/userRoute')
app.use('/api',blogRoute)
app.use('/api',categoryRoute)
app.use('/api',productRoute)
app.use('/api', userRoute)

const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})