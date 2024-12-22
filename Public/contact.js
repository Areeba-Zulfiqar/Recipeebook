async function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error-message");
  
    // Regular expressions for email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/; // Exactly 11 digits
  
    // Clear any previous errors
    errorMessage.textContent = "";
  
    // Validate username
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
      errorMessage.textContent = "Phone number must be exactly 11 digits!";
      return false;
    }
  
    // Validate subject
    if (!subject) {
      errorMessage.textContent = "Subject is required!";
      return false;
    }
  
    // Validate message
    if (!message) {
      errorMessage.textContent = "Message is required!";
      return false;
    }
  
    // Submit form data to the server
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, phone, subject, message }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        document.getElementById("loginForm").reset();
      } else {
        errorMessage.textContent = data.error || "Error submitting form.";
      }
    } catch (error) {
      console.error("Error:", error);
      errorMessage.textContent = "Error connecting to the server.";
    }
  
    return false; // Prevent default form submission behavior
  }
  