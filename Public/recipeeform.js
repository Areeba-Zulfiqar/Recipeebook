// Function to handle the form submission
document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page on submit

    // Collect form data
    const recipeData = {
        name: document.getElementById('name').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value,
        prepTime: document.getElementById('prepTime').value,
        cookTime: document.getElementById('cookTime').value,
        image: document.getElementById('imageUpload').files[0], // Image file if uploaded
        nutrition: {
            calories: document.getElementById('calories').value,
            protein: document.getElementById('protein').value,
            carbs: document.getElementById('carbs').value,
            fat: document.getElementById('fat').value,
            sugar: document.getElementById('sugar').value,
            fiber: document.getElementById('fiber').value,
        }
    };

    // Log the collected data (you can send this data to your server here)
    console.log('Recipe Data:', recipeData);

    // Reset form fields after submission
    document.getElementById('recipeForm').reset();

    // Optionally, alert the user that the recipe has been created
    alert('Recipe has been created successfully!');
});

// Function to close the recipe form
function closeRecipeForm() {
    // Clear form data
    document.getElementById('recipeForm').reset();

    // Optionally, redirect or close the form
    window.location.href = '/service'; // Redirecting to home page (adjust as necessary)
}
