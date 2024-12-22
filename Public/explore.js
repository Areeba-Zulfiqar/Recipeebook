// Recipe Collection
const recipes = [
    { 
        title: "Caesar Salad", 
        description: "Crisp romaine lettuce tossed with creamy Caesar dressing, croutons, and Parmesan cheese.",
        image: "caesar_salad.jpg",
        link: "/caesar_salad"
    },
    { 
        title: "Spaghetti Bolognese", 
        description: "Classic Italian pasta dish with a meaty sauce made from ground beef, tomatoes, and herbs.",
        image: "spaghetti_bolognese.jpg",
        link: "/spaghetti_bolognese"
    },
    { 
        title: "Vegetable Stir-fry", 
        description: "A colorful mix of stir-fried vegetables, including bell peppers, broccoli, carrots, and snap peas.",
        image: "vegetable_stirfry.jpg",
        link: "/vegetablestir_fry"
    },
    { 
        title: "Chicken Curry", 
        description: "A rich and aromatic curry made with chicken, coconut milk, and a blend of spices.",
        image: "chicken_curry.jpg",
        link: "/chicken_curry"
    },
    { 
        title: "Pancakes", 
        description: "Fluffy and light pancakes served with maple syrup, fresh berries, and whipped cream.",
        image: "pancakes.jpg",
        link: "/pancakes"
    },
    { 
        title: "Tacos", 
        description: "Soft tortillas filled with seasoned beef or chicken, lettuce, cheese, and salsa.",
        image: "tacos.jpg",
        link: "/tacos"
    },
    { 
        title: "Vegetable Soup", 
        description: "A hearty soup made with fresh vegetables, potatoes, and a flavorful broth.",
        image: "vegetable_soup.jpg",
        link: "/vegetable_soup"
    },
    { 
        title: "Beef Stew", 
        description: "Tender chunks of beef slow-cooked with potatoes, carrots, and onions in a savory broth.",
        image: "beef_stew.jpg",
        link: "/beef_stew"
    },
    { 
        title: "Apple Pie", 
        description: "A classic dessert made with a buttery pie crust and a sweet filling of cinnamon-spiced apples.",
        image: "apple_pie.jpg",
        link: "/apple_pie"
    },
    {
        title: "Garlic Bread", 
        description: "Crispy and buttery garlic bread, perfect as a side dish for pastas and soups.",
        image: "garlic_bread.jpg",
        link: "/garlic_bread"
    },
    {
        title: "Lemon Tart", 
        description: "A tangy and sweet lemon tart with a flaky crust, topped with powdered sugar.",
        image: "lemon_tart.jpg",
        link: "/lemon_tart"
    },
    {
        title: "Grilled Salmon", 
        description: "Perfectly grilled salmon fillets served with a lemon butter sauce.",
        image: "grilled_salmon.jpg",
        link: "/grilled_salmon"
    },
    {
        title: "Vegetarian Lasagna", 
        description: "Layered pasta with vegetables, ricotta cheese, and marinara sauce baked to perfection.",
        image: "vegetarian_lasagna.jpg",
        link: "/vegetarian_lasagna"
    },
    {
        title: "Stuffed Bell Peppers",
        description: "Bell peppers stuffed with a savory mix of rice, vegetables, and cheese, baked until golden.",
        image: "stuffed_bell_peppers.jpg",
        link: "/stuffedbell_peppers"        
    }, 
    {
        title: "BBQ Ribs",
        description: "Tender and juicy pork ribs glazed with a smoky barbecue sauce.",
        image: "bbq_ribs.jpg",
        link: "/bbq_ribs"               
    },
    {
        title: "Mango Smoothie",
        description: "A refreshing blend of ripe mangoes, yogurt, and a hint of honey, perfect for a summer drink.",
        image: "mango_smoothie.jpg",
        link: "/mango_smoothie"                       
    }
];

// Function to display recipes when the "Explore Recipes" button is clicked
document.getElementById("exploreButton").addEventListener("click", function() {
    // Hide the welcome section and show the recipes section
    document.getElementById("welcome").style.display = "none";
    document.getElementById("recipesSection").style.display = "block";

    // Get the container to display recipe cards
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = ""; // Clear any existing content

    // Create a card for each recipe and append to the list
    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <a href="${recipe.link}">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
            </a>
        `;
        recipeList.appendChild(recipeCard);
    });
});