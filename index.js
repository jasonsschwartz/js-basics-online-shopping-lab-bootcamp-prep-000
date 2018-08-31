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
  var line = "In your cart, you have ";
  if (cart.isEmpty()){
    return "Your shopping cart is empty.";
  } else {
    for (let i = 0; i<cart.length; i++){
      if (i===0){
        line += `${cart.item.itemName} at $${cart.item.itemPrice}`;
      } else if (i === cart.length-1) {
        line += `, and ${cart.item.itemName} at $${cart.item.itemPrice}.`;
      } else {
        line += `, ${cart.item.itemName} at $${cart.item.itemPrice}`;
      }
    }
  }
  return line;
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
