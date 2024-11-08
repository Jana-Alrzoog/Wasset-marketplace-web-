// Define image paths
const cameraImagePath = 'canon.png';
const hangerImagePath = 'hangers.png';

// Product data in the cart
let cart = [
    { id: 1, name: "Canon Camera", price: 5, quantity: 1, image: cameraImagePath },
    { id: 2, name: "Plastic Hangers", price: 8, quantity: 2, image: hangerImagePath }
];

// Function to render and display cart items
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = '<h1>Your Cart</h1>';
    let totalCost = 0;

    cart.forEach((item, index) => {
        const totalItemCost = item.price * item.quantity; // Calculate total for each item
        totalCost += totalItemCost; // Add to the overall total cost

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <input type="text" value="your item is free delivery" readonly>
                    <p>Price: $${totalItemCost}</p> <!-- Display the calculated total for the item -->
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
                
                <div class="item-quantity">
                    <label>Qty</label>
                    <button data-index="${index}" class="decrease-qty">-</button>
                    <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
                    <button data-index="${index}" class="increase-qty">+</button>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML += `
        <div class="cart-total">
            <p>Total Amount: <span id="total-cost">$${totalCost}</span></p>
            <button id="checkout-button">Check Out</button>
        </div>
    `;
}

// Event listener to handle quantity changes and item removal
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-item")) {
        const index = event.target.getAttribute("data-index");
        cart.splice(index, 1); // Remove item from cart array
        renderCart(); // Re-render cart after removal
    } else if (event.target.classList.contains("increase-qty")) {
        const index = event.target.getAttribute("data-index");
        cart[index].quantity++;
        renderCart(); // Re-render cart after increasing quantity
    } else if (event.target.classList.contains("decrease-qty")) {
        const index = event.target.getAttribute("data-index");
        if (cart[index].quantity > 1) cart[index].quantity--;
        renderCart(); // Re-render cart after decreasing quantity
    }
});

// Event listener for checkout button
document.addEventListener("click", function(event) {
    if (event.target.id === "checkout-button") {
        const totalCost = document.getElementById("total-cost").textContent;
        alert(`Thank you for your purchase! Total cost is ${totalCost}.`);
        window.location.href = "Product evaluation .html"; // Redirect to evaluation page
    }
});

// Initial cart rendering on page load
renderCart();
