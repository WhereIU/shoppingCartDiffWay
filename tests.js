import shoppingCart from './index.js';

// tests

// add first item
shoppingCart.addItem({
  name: 'apple',
  price: 20,
  quantity: 2,
});

// change +quantity of existing item when adding
shoppingCart.addItem({
  name: 'apple',
  price: 20,
  quantity: 5,
});

// add another name item
shoppingCart.addItem({
  name: 'banana',
  price: 20,
  quantity: 5,
});

console.log(shoppingCart);

// add another price but same name item
shoppingCart.addItem({
  name: 'apple',
  price: 1,
  quantity: 10,
});

// change -quanity even to just delete item
shoppingCart.addItem({
  name: 'apple',
  price: 20,
  quantity: -10,
});

shoppingCart.addItem({
  name: 'for be deleted next step',
  price: 999,
  quantity: 1,
});

// remove item with name and price out of adding method
shoppingCart.removeItem('for be deleted next step', 999);

// result cart
console.log(shoppingCart);

// updateQuantity and discount
shoppingCart.addItem({
  name: 'lemon',
  price: 9,
  quantity: 15,
});
shoppingCart.updateQuantity('lemon', 9, 90);
shoppingCart.applyDiscount('#1111999');
console.log(shoppingCart);

// return total of cart
console.log(shoppingCart.calculateTotal());

// // clear cart
shoppingCart.clearCart();
console.log(shoppingCart);
