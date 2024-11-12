document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const productNameInput = document.getElementById('product-name');
    const regularPriceInput = document.getElementById('regular-price');
    const quantityInput = document.getElementById('quantity');
    const salePriceInput = document.getElementById('sale-price');
    const descriptionInput = document.getElementById('description');
    const addProductButton = document.querySelector('.add-product');

    // Function to validate form fields
    function validateForm() {
        // Check if any field is empty
        if (!productNameInput.value || !regularPriceInput.value || !quantityInput.value || !salePriceInput.value || !descriptionInput.value) {
            alert('Please fill in all fields.');
            return false;
        }
        
        // Check if product name starts with a letter
        if (!/^[A-Za-z]/.test(productNameInput.value)) {
            alert('Product name must start with a letter.');
            return false;
        }

        // Check if regular price and quantity are numbers
        if (isNaN(regularPriceInput.value) || isNaN(quantityInput.value) || isNaN(salePriceInput.value)) {
            alert('Regular price, quantity, and sale price must be numbers.');
            return false;
        }

        return true;
    }

    // Event listener for add product button
    addProductButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Validate the form
        if (!validateForm()) {
            return;
        }

        // Create a new product object
        const newProduct = {
            name: productNameInput.value,
            regularPrice: parseFloat(regularPriceInput.value),
            quantity: parseInt(quantityInput.value),
            salePrice: parseFloat(salePriceInput.value),
            description: descriptionInput.value
        };

        // Retrieve products from local storage or initialize an empty array
        const products = JSON.parse(localStorage.getItem('products')) || [];

        // Add new product to the array
        products.push(newProduct);

        // Save updated product list to local storage
        localStorage.setItem('products', JSON.stringify(products));

        // Show success alert
        alert(`Product "${newProduct.name}" has been added successfully.`);

        // Clear the form
        productNameInput.value = '';
        regularPriceInput.value = '';
        quantityInput.value = '';
        salePriceInput.value = '';
        descriptionInput.value = '';
    });
});
