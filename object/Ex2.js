const shoppingCart = {
    items: [],
  
    addItem(name, price, quantity) {
      const existingItem = this.items.find(item => item.name === name);
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ name, price, quantity });
      }
    },
  
    removeItem(name) {
      this.items = this.items.filter(item => item.name !== name);
    },
  
    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  };
  
  shoppingCart.addItem("Shirt", 30, 1);
  shoppingCart.addItem("Pants", 30, 1);
  shoppingCart.addItem("Shirt", 20, 1); 
  shoppingCart.addItem("Shoes", 50, 1);
  
  console.log("Items in cart:", shoppingCart.items);
  console.log("Total cost:", shoppingCart.calculateTotal());
  
  shoppingCart.removeItem("Pants");
  console.log("Items in cart after removing 'Pants':", shoppingCart.items);
  console.log("Total cost after removing 'Pants':", shoppingCart.calculateTotal());
  