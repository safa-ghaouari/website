// Update the total price of all items in the cart
function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.card-body').forEach(item => {
        const price = parseFloat(item.querySelector('.unit-price').innerText.replace('$', '').trim());
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        total += price * quantity;
    });
    document.querySelector('.total').innerText = `${total} $`;
}

// Update the quantity and total price when "+" or "–" is clicked
function updateQuantity(event) {
    const quantityField = event.target.closest('div').querySelector('.quantity');
    let quantity = parseInt(quantityField.innerText);

    quantity += event.target.classList.contains('fa-plus-circle') ? 1 : (quantity > 0 ? -1 : 0);

    quantityField.innerText = quantity;
    updateTotalPrice();
}

// Remove an item from the cart
function deleteItem(event) {
    event.target.closest('.card-body').remove();
    updateTotalPrice();
}

// Toggle the "liked" state of an item
function toggleLike(event) {
    event.target.classList.toggle('liked');
}

// Attach event listeners to the buttons (ensure only attached once)
function attachEventListeners() {
    document.querySelectorAll('.fa-plus-circle, .fa-minus-circle').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });

    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', deleteItem);
    });

    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', toggleLike);
    });
}

// Run this once when the page loads
attachEventListeners();

// Calculate the initial total price
updateTotalPrice();
