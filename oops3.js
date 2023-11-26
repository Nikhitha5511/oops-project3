class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product, quantity) {
      if (product.quantity >= quantity) {
        const index = this.products.findIndex(item => item.product.name === product.name);
        if (index !== -1) {
          this.products[index].quantity += quantity;
        } else {
          this.products.push({ product, quantity });
        }
        product.quantity -= quantity;
        console.log(`${quantity} ${product.name}(s) added to cart.`);
      } else {
        console.log(`Sorry, only ${product.quantity} ${product.name}(s) available.`);
      }
    }
  
    calculateTotalPrice() {
      return this.products.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
  
    checkout() {
      const totalPrice = this.calculateTotalPrice();
      console.log(`Total price: $${totalPrice}`);
    }
  }
  
  class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.cart = new ShoppingCart();
    }
  }


  const product1 = new Product('Shirt', 25, 10);
  const product2 = new Product('saree', 40, 15);
  
  const customer = new Customer('John', 'john@example.com');
  customer.cart.addProduct(product1, 2);
  customer.cart.addProduct(product2, 3);
  customer.cart.checkout();