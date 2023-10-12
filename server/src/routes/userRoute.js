const express=require('express')
const router=express.Router()

const { signin, signup, postEmailConfirmation, userDetails, getUsers } = require('../controllers/userController')
const { requireSignin } = require('../middlewares/userMiddlewares')


router.post('/signup',signup)
router.put('/confirmation/:token', postEmailConfirmation)
router.post('/signin',signin)
router.get('/userdetails/:id', requireSignin,userDetails)
router.get('/userlist',getUsers)
router.post('/profile', (req,res)=>{
    res.status(200).json({user:'profile'})
})

module.exports=router;