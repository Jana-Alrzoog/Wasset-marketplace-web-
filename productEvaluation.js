// JavaScript code to handle form validation and submission
document.addEventListener('DOMContentLoaded', function () {
    // Get the Submit button and add event listener
    document.getElementById('submitBtn').addEventListener('click', function (event) {
        // Get the selected order and feedback text from the form
        const selectedOrder = document.getElementById('orderSelect').value;
        const feedbackText = document.getElementById('feedbackText').value;

        // Check if the order is selected
        if (selectedOrder === "") {
            alert("Please select a product from the dropdown.");
            return;
        }

        // Check if feedback is provided
        if (feedbackText.trim() === "" || feedbackText === "Enter your feedback here") {
            alert("Please provide your feedback.");
            return;
        }

        // Assume the rating is implicitly taken from the product display (you can add an actual rating input if needed)
        const userRating = "★★★★☆"; // Static rating (you can make this dynamic if needed)

        // Display the success message with the product and rating
        alert(`Thank you for your feedback! Your rating for product: ${selectedOrder} is ${userRating}`);

        // Redirect to the Home page after feedback submission
        window.location.href = "home.html"; // Redirect to the home page
    });
});
