const express = require('express'); 
const router = express.Router();   
const path = require('path'); 
const Recipe = require('../Models/projectModels');
const Registration = require('../Models/registrationModels');
const Contact = require('../Models/contactModels');

router.get('/', (req, res) => {
    res.render('index'); 
});
router.get('/about', (req, res) => {
    res.render('about'); 
});

router.get('/review', (req, res) => {
    res.render('review'); 
});

router.get('/service', (req, res) => {
    res.render('service'); 
});

router.get('/registration', (req, res) => {
    res.render('registration'); 
});

router.get('/contact', (req, res) => {
    res.render('contact'); 
});

router.get('/explore', (req, res) => {
    res.render('explore'); 
});

router.get('/recipeeform', (req, res) => {
    res.render('recipeeform'); 
});

// GET route to serve the create recipe page
router.get('/create', (req, res) => {
    res.render('recipeeform'); 
});

router.get('/chefQuotes', (req, res) => {
    res.render('chefQuotes'); 
});


// POST route to handle registration form submission
router.post('/registeration', async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        // Create a new registration document
        const newRegistration = new Registration({
            username,
            email,
            phone,
            password
        });

        // Save the document to the database
        await newRegistration.save();

        // Send success response
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.get('/contact', (req, res) => {
    res.render('contact');
  });
  
// Route to handle form submission
router.post('/contact', async (req, res) => {
    try {
      const { username, email, subject, message } = req.body;
  
      // Validation check
      if (!username || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Save the data to the database
      const newContact = new Contact({ username, email, subject, message });
      await newContact.save();
  
      res.status(201).json({ message: 'Form submitted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error, please try again later' });
    }
  });


router.get('/recipee1', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Chocolate Cake' });
        res.render('recipee1', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/recipee2', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Creamy Pasta' });
        res.render('recipee2', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/recipee3', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Mint Margarita' });
        res.render('recipee3', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/caesar_salad', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Caesar Salad' });
        res.render('caesar_salad', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/spaghetti_bolognese', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Spaghetti Bolognese' });
        res.render('spaghetti_bolognese', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/vegetablestir_fry', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Vegetable Stir-fry' });
        res.render('vegetablestir_fry', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/chicken_curry', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Chicken Curry' });
        res.render('chicken_curry', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/pancakes', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Pancakes' });
        res.render('pancakes', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/tacos', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Tacos' });
        res.render('tacos', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/vegetable_soup', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Vegetable Soup' });
        res.render('vegetable_soup', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/beef_stew', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Beef Stew' });
        res.render('beef_stew', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/apple_pie', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Apple Pie' });
        res.render('apple_pie', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/garlic_bread', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Garlic Bread' });
        res.render('garlic_bread', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/lemon_tart', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Lemon Tart' });
        res.render('lemon_tart', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/grilled_salmon', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Grilled Salmon' });
        res.render('grilled_salmon', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/vegetarian_lasagna', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Vegetarian Lasagna' });
        res.render('vegetarian_lasagna', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/stuffedbell_peppers', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Stuffed Bell Peppers' });
        res.render('stuffedbell_peppers', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/bbq_ribs', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'BBQ Ribs' });
        res.render('bbq_ribs', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

router.get('/mango_smoothie', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ name: 'Mango Smoothie' });
        res.render('mango_smoothie', { recipe });
    } 
    catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).send('Error fetching recipe');
    }
});

// Export the router to be used in app.js
module.exports = router;                             
