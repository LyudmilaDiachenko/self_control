
// Підрахувати загальну суму покупок в корзині
 
const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0

for(let i = 0; i < carts.length; i++){
    console.log(carts[i])
    total += carts[i]
}
console.log("Total:", total)

// Інший варіант рішення
for (let cart of carts) {
    total += cart
}
console.log('Total:', total);

// Ціну збільшили в двічі і додали
for (let cart of carts) {
    cart = cart * 2
    total += cart
}
console.log('Total:', total);