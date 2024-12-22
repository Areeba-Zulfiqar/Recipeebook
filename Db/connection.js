const mongoose = require('mongoose'); 

// For environment variables
require('dotenv').config(); 

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mydatabase';

// Function to connect to MongoDB
const connectDB = async () => {
  try 
  {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } 
  catch (err) 
  {
    console.error('MongoDB connection error:', err.message);
  }
};
module.exports = connectDB;