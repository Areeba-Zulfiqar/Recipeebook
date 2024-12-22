document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const book = document.getElementById("book").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    const reviewsList = document.getElementById("reviewsList");

    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${name}</strong> reviewed <em>${book}</em>
        <p>Rating: ${rating}/5</p>
        <p>${review}</p>
    `;

    reviewsList.appendChild(li);

    // Alert message for success
    alert("Review submitted successfully!");

    // Clear form
    document.getElementById("reviewForm").reset();
});
