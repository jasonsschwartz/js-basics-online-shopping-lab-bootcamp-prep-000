var cart = [];
//var itemObj = new Object();

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  item = new Object();
  item.itemName = `${item}`;
  item.itemPrice = Math.floor(Math.random() * (100-1) + 1);
  cart.push(item);
  return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
