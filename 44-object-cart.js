// Задача 4
// Працюємо з колекцією товарів в корзині:
// - getItems() дає нам посилання  на наш items
// - add(product) маємо обʼєкт , його нам потрібно додати в items
// - remove(productName)
// - clear() очищаємо корзину. тобто робимо пустий масив
// - countTotalPrice()  - має рвхувати загальну суму всіх продуктів, які в нас є

/*
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
*/

const card = {
    items: [],
    getItems(){
        return this.items
    },
    add(product){
        this.items.push(product)
    },
    remove(productName){
        for(let i = 0; i < this.items.length; i++){
            if (this.items[i].name === productName){
                console.log(`Знайшли: ${productName}`)
            this.items.splice(i, 1)
            }
        }
    },
    clear(){
        this.items = []
    },  // clear() очищаємо корзину
    countTotalPrice(){
        let totalPrise = 0
        for (const item of this.items){
            totalPrise += item.price
        }
        return totalPrise
    }
}
card.add({ name: '🍎', price: 50 })
card.add({ name: '🍇', price: 70 })
card.add({ name: '🍋', price: 60 })
card.add({ name: '🍓', price: 110 })

console.log(card.remove('🍎'))
// card.clear()
console.table(card.items)
console.log('Total:', card.countTotalPrice())