document.addEventListener("DOMContentLoaded", function () {
  const cartItems = []; // Initialize an empty shopping cart array

  // Add event listener for "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // Add the selected product to the cart
      addToCart(index);
      updateCartDisplay();
    });
  });

  // Add event listener for "+" buttons to increase quantity
  const increaseButtons = document.querySelectorAll(".increase-quantity");
  increaseButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      increaseQuantity(index);
      updateCartDisplay();
    });
  });

  // Add event listener for "-" buttons to decrease quantity
  const decreaseButtons = document.querySelectorAll(".decrease-quantity");
  decreaseButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      decreaseQuantity(index);
      updateCartDisplay();
    });
  });

  // Add event listener for "Remove" buttons to delete items
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      removeFromCart(index);
      updateCartDisplay();
    });
  });

  // Function to add a product to the cart
  function addToCart(productId) {
    // For simplicity, we'll assume product IDs correspond to index in the product list
    cartItems.push({
      id: productId,
      quantity: 1,
    });
  }

  // Function to increase the quantity of an item in the cart
  function increaseQuantity(index) {
    cartItems[index].quantity++;
  }

  // Function to decrease the quantity of an item in the cart
  function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
    }
  }

  // Function to remove an item from the cart
  function removeFromCart(index) {
    cartItems.splice(index, 1);
  }

  // Function to update the cart display
  function updateCartDisplay() {
    // Update the cart items and total price
    const cartItemsList = document.querySelector(".cart-items");
    const totalPriceElement = document.getElementById("cart-total");
    let totalPrice = 0;

    // Clear the cart display
    cartItemsList.innerHTML = "";

    // Iterate through cart items and update the display
    cartItems.forEach((item, index) => {
      const product = products[item.id]; // Retrieve product details from products array
      const itemTotal = product.price * item.quantity;

      totalPrice += itemTotal;

      // Create a list item for the cart
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
                <img src="1.jpg" alt="prod1" />
                <span>${product.name} - Quantity: ${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
                <button class="increase-quantity">+</button>
                <button class="decrease-quantity">-</button>
                <button class="remove-item">Remove</button>
            `;

      // Add event listeners for the new buttons
      cartItem
        .querySelector(".increase-quantity")
        .addEventListener("click", () => {
          increaseQuantity(index);
          updateCartDisplay();
        });

      cartItem
        .querySelector(".decrease-quantity")
        .addEventListener("click", () => {
          decreaseQuantity(index);
          updateCartDisplay();
        });

      cartItem.querySelector(".remove-item").addEventListener("click", () => {
        removeFromCart(index);
        updateCartDisplay();
      });

      // Append the cart item to the list
      cartItemsList.appendChild(cartItem);
    });

    // Update the total price
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }
});

const products = [
  { name: "Product 1", price: 10.0, image: "1.jpg" },
  { name: "Product 2", price: 15.0, image: "2.jpg" },
];
