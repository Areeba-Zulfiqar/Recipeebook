const express = require('express');      
const path = require('path');            
const bodyParser = require('body-parser');
const mongoose = require('mongoose');   
require('dotenv').config();             
const app = express();                  

// Middleware for parsing data
app.use(bodyParser.json()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
const db = require('./Db/connection');
db();

// Import the routes
const projectRoutes = require('./Routes/projectRoutes');
app.use('/', projectRoutes);

app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
