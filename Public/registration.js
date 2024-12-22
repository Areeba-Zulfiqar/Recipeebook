const newUser = new Registration({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
});

newUser.save()
    .then(() => res.status(201).json({ message: 'User registered successfully!' }))
    .catch(err => res.status(500).json({ message: 'Error registering user', error: err }));

function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Regular expression for validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if username is provided
    if (!username) {
        errorMessage.textContent = "Username is required!";
        return false;
    }
    // Validate email format
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address!";
        return false;
    }
    // Validate phone number format
    if (!phoneRegex.test(phone)) {
        errorMessage.textContent = "Phone number should be 11 digits!";
        return false;
    }
    // Check password against regex
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character!";
        return false;
    }
    errorMessage.textContent = ""; // Clear any previous errors
    alert("Login successful!");
    return true; // Proceed with form submission
}