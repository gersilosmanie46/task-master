/* main.js */

// This code demonstrates a complex and elaborate JavaScript program that acts as a virtual online marketplace.
// It includes features like user authentication, product listing, shopping cart functionality, and transaction processing.

// Define global variables
let loggedInUser;
let products = [];
let cart = [];

// User authentication
function login(username, password) {
  // Simulate authentication logic
  if (username === "admin" && password === "password") {
    loggedInUser = username;
    console.log("Logged in successfully!");
  } else {
    console.log("Invalid credentials!");
  }
}

// Product listing
function addProduct(name, price, category) {
  let product = { name, price, category };
  products.push(product);
  console.log(`Product '${name}' added successfully!`);
}

function listProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`Product ${i+1}: ${products[i].name} ($${products[i].price}) - ${products[i].category}`);
  }
}

// Shopping cart functionality
function addToCart(productIndex, quantity = 1) {
  let product = products[productIndex - 1];
  let item = { product, quantity };
  cart.push(item);
  console.log(`Added ${quantity} '${product.name}' to your cart.`);
}

function viewCart() {
  for (let i = 0; i < cart.length; i++) {
    console.log(`Item ${i+1}: ${cart[i].quantity}x ${cart[i].product.name} ($${cart[i].product.price})`);
  }
}

function removeItemFromCart(itemIndex) {
  if (itemIndex >= 1 && itemIndex <= cart.length) {
    let item = cart.splice(itemIndex - 1, 1);
    console.log(`Removed '${item[0].product.name}' from your cart.`);
  } else {
    console.log("Invalid item index!");
  }
}

// Transaction processing
function checkout() {
  let totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount += cart[i].product.price * cart[i].quantity;
  }

  // Simulate transaction processing
  console.log(`Your total: $${totalAmount.toFixed(2)}`);
  console.log("Processing payment...");

  setTimeout(function() {
    console.log("Payment processed successfully!");
    cart = [];
    console.log("Cart cleared.");
  }, 2000);
}

// Usage example
login("admin", "password");
addProduct("iPhone 12", 999, "Electronics");
addProduct("AirPods Pro", 199, "Electronics");
addProduct("Laptop", 1299, "Electronics");
listProducts();
addToCart(1, 2);
addToCart(2);
addToCart(3);
viewCart();
removeItemFromCart(2);
viewCart();
checkout();