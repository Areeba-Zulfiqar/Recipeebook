const mongoose = require('mongoose');

// Define schema for the registration data
const registrationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create and export the Registration model
module.exports = mongoose.model('registration', registrationSchema);