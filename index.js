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
  if (cart.length===0){
    return "Your shopping cart is empty.";
  } else {
    for (let i = 0; i<cart.length; i++){
      if (i===0){
        line += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      } else if (i === cart.length-1) {
        line += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
      } else {
        line += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      line += ".";
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
