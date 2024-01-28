const getDiscount = (code) => {
  // system with codes, but for simplicity code = '#1111999' always
  // can be used array/object with discount codes and discount value for codes
  if (code === '#1111999') {
    return 5; // in this case the permanent discount will be only 5%
  }
  return 0;
};

const shoppingCart = {
  items: [],
  total: 0,
  addItem(newItem) {
    const { name: newItemName, price: newItemPrice, quantity: newItemQuantity } = newItem;
    if (!(newItemName
            && newItemPrice > 0
             && newItemQuantity)) {
      return;
    } // check of isValid newItem

    const itemsLen = this.items.length;
    for (let i = 0; itemsLen > i; i += 1) {
      // if item with that name and price is in yet
      if (this.items[i].name === newItemName
                && this.items[i].price === newItemPrice) {
        if (this.items[i].quantity + newItemQuantity > 0) {
          this.items[i].quantity += newItemQuantity; // change quanitity to new for item
          this.total += newItemQuantity * newItemPrice;
        } else {
          this.removeItem(newItemName, newItemPrice); // item quantity <= 0 is delete in cart
        }
        return;
      }
    }

    if (newItemQuantity > 0) {
      this.items.push(newItem);
      this.total += newItemQuantity * newItemPrice;
    } // add item to cart as new
  },

  removeItem(itemName, itemPrice) {
    const itemsLen = this.items.length;
    const result = [];
    for (let i = 0; itemsLen > i; i += 1) {
      if (!(this.items[i].name === itemName
                && this.items[i].price === itemPrice)) {
        result.push(this.items[i]);
      } else {
        this.total -= this.items[i].quantity * itemPrice;
      } // add every item back except for the one being deleted
    }

    this.items = [...result];
  },

  updateQuantity(itemName, itemPrice, newQuantity) {
    const itemsLen = this.items.length;
    for (let i = 0; itemsLen > i; i += 1) {
      if (this.items[i].name === itemName
            && this.items[i].price === itemPrice) {
        this.total += (newQuantity - this.items[i].quantity) * itemPrice;
        this.items[i].quantity = newQuantity;
        return;
      }
    } // if with that name and price item in then change quantity to new
  },

  calculateTotal() { return this.total; },

  clearCart() {
    this.items = [];
    this.total = 0;
  },

  applyDiscount(code) {
    this.total *= (100 - getDiscount(code)) / 100;
    // code is valid is get back number of discount || 0
  },
};

export default shoppingCart;
