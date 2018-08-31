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
  var name = item;
  item = new Object();
  item.itemName = `${name}`;
  item.itemPrice = Math.floor(Math.random() * (100-1) + 1);
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.isempty)
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
