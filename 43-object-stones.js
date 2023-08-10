// Задача 3
// Напишіть функцію calcTotalPrice(stones, stoneName), 
// яка приймає масив обʼєктів та рядок з назвою каменя.
// Функція рахує та повертає загальну вартість каменів з таким іменем, ціною та вартістью з обʼєкта

const stones = [
    { name: 'Смарагд', price: 1300, quantity: 4 },
    { name: 'Діамант', price: 2700, quantity: 3 },
    { name: 'Сапфір', price: 400, quantity: 7 },
    { name: 'Граніт', price: 200, quantity: 2 },
  ];
function price(stones, stoneName){
  let totalPrice = 0
  for(const stone of stones) {
    if(stone.name !== stoneName) continue
    return totalPrice = stone.price * stone.quantity
  }
  return (`I have not this stones`)
}

console.log(price(stones, 'Смарагд'))
console.log(price(stones, 'Діамант'))
console.log(price(stones, 'Сапфір'))
console.log(price(stones, 'Граніт'))
console.log(price(stones, 'Рубін'))