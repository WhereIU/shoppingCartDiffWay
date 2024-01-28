const shoppingCart = {
    items: [],
    total: 0,
    addItem (newItem) {
        const {name: newItemName, price: newItemPrice, quantity: newItemQuantity} = newItem;
        if (!(newItemName &&
            newItemPrice > 0)) {
            return;
        }
        const itemsLen = this.items.length;
        for (let i = 0; itemsLen > i; i += 1) {
            if (this.items[i].name === newItemName &&
                this.items[i].price === newItemPrice) {
                    if (this.items[i].quantity + newItemQuantity > 0) {
                        this.items[i].quantity += newItemQuantity;
                    } else {
                        this.removeItem(newItemName, newItemPrice);
                    }
                return;
            }
        }
        if (newItemQuantity > 0) {
            this.items.push(newItem);
        } 
    },

    removeItem (itemName, itemPrice) {
        const itemsLen = this.items.length;
        const result = [];
        for (let i = 0; itemsLen > i; i += 1) {
            if (!(this.items[i].name === itemName &&
                this.items[i].price === itemPrice)) {
                    result.push(this.items[i])
                }
             }
        this.items = [...result];
    },

    clearCart () {
        this.items = [];
        this.total = 0;
    }
}

export default shoppingCart;

// tests
shoppingCart.addItem({
    name: 'apple',
    price: 20,
    quantity: 1,
});

shoppingCart.addItem({
    name: 'apple',
    price: 20,
    quantity: 5,
});
shoppingCart.addItem({
    name: 'banana',
    price: 20,
    quantity: 5,
});
shoppingCart.addItem({
    name: "apple",
    price: 1,
    quantity: -10,
});
shoppingCart.addItem({
    name: "apple",
    price: 20,
    quantity: -10,
});
console.log(shoppingCart);
