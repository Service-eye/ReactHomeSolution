const { comparePassword, hashPassword } = require("../helper/authHelper");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Token = require('../models/tokenModel')
const crypt=require('crypto')
// const {validationResult}=require('express-validator')

exports.signup = async (req, res) => {
  try {
       // Check for validation errors
    // const errors=validationResult(req);
    // if(errors){
    //   return res.status(200).json({success:false, error:errors})
    // }

    const { name, email, password, contactNumber } = req.body;
   
    // Check if the email already exists
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // Hash the password
  //  await garna nabirsine.
    const hashedPassword = await hashPassword(password); // Assuming 'password' is the user's plain password

    let token = jwt.sign({email}, process.env.JWT_SECRET,{expiresIn:"1d"});

    // Create a new user
    const user = new User({
      name,
      contactNumber,
      email,
      password: hashedPassword,
      userName: Math.random().toString(), // Generate a random userName (consider using a more robust method)
    });

    // Save the user to the database
    await user.save();

      // Save the token to the database
    const tokenDocument = new Token({
        token,
        userId: user._id,
        role:user.role
      });
  
    await tokenDocument.save();

    res
      .status(200)
      .json({ success: true, message: "User registered successfully",token,
      user: {
        _id:user._id,
        role:user.role,
        name: user.name,
        email: user.email,
        contactNumber: user.contactNumber,
      }, });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: error.message });
  }
  
};


// confirming the email:
exports.postEmailConfirmation = (req, res) => {
    const tokenValue=req.params.token
    console.log('received token', tokenValue)
    // at first, find the valid or matching token.
    Token.findOne({ token: tokenValue})
      .then((token) => {
        console.log('Found token in the database: ', token)
        if (!token) {
          return res
            .status(400)
            .json({ error: "Invalid Token or Token may have expired." });
        }
        // if we find the valid token then find the valid user for this token.
        User.findOne({ _id: token.userId })
          .then((user) => {
            if (!user) {
              return res.status(400).json({
                error: "We are unable to find the valid user for this token.",
              });
            }
            // check if user is already verified or not.
            if (user.isVerified) {
              return res
                .status(400)
                .json({ error: "email is already verified, login to continue." });
            }
  
            // save the verified user
            user.isVerified = true;
            user
              .save()
              .then((user) => {
                if (!user) {
                  return res
                    .status(400)
                    .json({ error: "Failed to verify your email." });
                }
                res.json({
                  message:
                    "Congrats, Your email has been verified. login to continue.",
                });
              })
              .catch((err) => {
                return res.status(400).json({ error: err });
              });
          })
          .catch((err) => {
            return res.status(400).json({ error: err });
          });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  };

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(201)
        .json({ success: false, message: "User not found in the system" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordMatch = await comparePassword(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(201)
        .json({ success: false, message: "Password didn't match" });
    }

    // Generate a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ _id: user._id, role:user.role }, process.env.JWT_SECRET);
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        role:user.role,
        name:user.name,
        email: user.email,
        contactNumber: user.contactNumber,
      },
    });

    console.log(`password is ${password}`);
    console.log(`user.password is ${user.password}`);
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Error while logging in",
        error: error.message,
      });
  }
};

exports.userDetails = async (req, res) => {
    try {
      // Get the user ID from the request
      const userId = req.user._id;
  
      // Find the user by ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Return user details
      res.status(200).json({
        success: true,
        message: "User details retrieved successfully",
        user: {
          _id: user._id,
          role: user.role,
          name: user.name,
          email: user.email,
          contactNumber: user.contactNumber,
        },
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error while fetching user details",
        error: error.message,
      });
    }
  };
  

  exports.getUsers = async (req, res) => {
    try {
        // Find all users in the database
        const users = await User.find({});

        if (!users) {
            return res.status(201).json({ message: 'No Users found.' });
        }
        // Send the list of users as a JSON response
        return res.status(200).json(users);
      
    }
    catch (error) {
        console.log(error)
        return res.status(404).json({ message: 'Error while getting the list of users.' })
    }
}