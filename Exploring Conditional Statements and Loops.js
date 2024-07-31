// Sample products
let products = [
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 },
  { name: 'Product 3', price: 30 },
];

// User's cart
let cart = [];

// User's login status
let isLoggedIn = true;

// Task 1: Check if user is logged in
if (!isLoggedIn) {
  console.log('Please log in to add items to your cart.');
} else {
  // Task 2: Display products and add to cart
  for (let i = 0; i < products.length; i++) {
    console.log(`Product Name: ${products[i].name}, Price: ${products[i].price}`);
    // Add product to cart
    cart.push(products[i]);
  }

  // Task 3: Calculate total cost
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].price;
  }

  console.log(`Total cost of items in the cart: ${totalCost}`);
}
