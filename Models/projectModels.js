const mongoose = require('mongoose');

// Define the Recipe schema
const recipeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['Appetizer', 'Main Course', 'Dessert', 'Drink', 'Snack' ,'Soup' , 'Breakfast' , 'Side Dish'], 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String, 
    required: true
  }],
  instructions: [{
    type: String,
    required: true
  }],
  prepTime: {
    type: Number, 
    required: true
  },
  cookTime: {
    type: Number, 
    required: true
  },
  imageUrl: {
    type: String,
    required: true, 
    default: 'https://via.placeholder.com/150.jpg' 
  },
  nutrition: {
    calories: { type: Number },
    protein: { type: Number },
    carbs: { type: Number },
    fat: { type: Number },
    sugar: { type: Number },
    fiber: { type: Number }
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Export the Recipe model
module.exports = mongoose.model('project', recipeSchema);
