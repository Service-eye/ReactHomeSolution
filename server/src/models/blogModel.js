const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  blogPic: {
    type:String,
    required:true

  },
  createdAt: {
    type: String,
  },
});

// Middleware to format createdAt field before saving
blogSchema.pre("save", function (next) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0]; // Get the date portion
  this.createdAt = formattedDate; // Update the createdAt field
  next();
});

module.exports = mongoose.model("Blog", blogSchema);
