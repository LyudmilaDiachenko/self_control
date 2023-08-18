/* 
 * Працюємо з колекцією товарів в корзині: 
 * - getItems() 
 * - add(product) 
 * - remove(productName) 
 * - clear() 
 * - countTotalPrice() 
 * - increaseQuantity(productName) 
 * - decreaseQuantity(productName) 
 * 
 * { name: '🍎', price: 50 } 
 * { name: '🍇', price: 70 } 
 * { name: '🍋', price: 60 } 
 * { name: '🍓', price: 110 } 
*/

const cart = { 
    items: [], 
    getItems() {
        return this.items
    },
    add(product) { 
      for (const item of this.items) { 
        if (item.name === product.name) { 
          item.quantity += 1; 
          return; 
        } 
      } 
      const newProduct = { 
        ...product, 
        quantity: 1, 
      }; 
      this.items.push(newProduct); 
    }, 
    remove(productName) { 
      const { items } = this; 
      for (let i = 0; i < items.length; i++) { 
        const item = items[i]; 
        if (productName === item.name && item.quantity > 1) { 
          console.log('Знайдено'); 
          console.log(item.quantity); 
          item.quantity -= 1; 
          // items.splice(i, 1); 
        } else if (productName === item.name && item.quantity === 1) { 
          items.splice(i, 1); 
        } 
      } 
    }, 
    clear() {
        this.items = [];
    }, 
    countTotalPrice() {
        const { items } = this;
        let total = 0
        for (const {price, quantity} of items) {
            total += price * quantity
        }
        return total
    }, 
    increaseQuantity(productName) {
        const { items } = this; 
        for (let i = 0; i < items.length; i++) { 
            const item = items[i]; 
            if (productName === item.name) { 
              item.quantity += 1;
            }
        }
    },
    decreaseQuantity(productName) {
        const { items } = this; 
        for (let i = 0; i < items.length; i++) { 
            const item = items[i]; 
            if (productName === item.name && item.quantity > 1) { 
              item.quantity -= 1;
            }
        }
    }, 
  }; 
   
cart.add({ name: '🍎', price: 50 }); 
cart.add({ name: '🍇', price: 70 }); 
cart.add({ name: '🍋', price: 60 }); 
cart.add({ name: '🍓', price: 110 }); 
cart.add({ name: '🍇', price: 70 }); 
cart.add({ name: '🍎', price: 50 }); 
   
// cart.remove('🍎'); 
cart.remove('🍇'); 
// cart.clear();
console.log(cart.increaseQuantity('🍇'))
console.log(cart.countTotalPrice('🍇'))
console.log(cart.decreaseQuantity('🍓'))