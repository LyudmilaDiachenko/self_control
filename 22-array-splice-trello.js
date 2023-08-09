
// Працюємо з колекцією карток в trello 
// - Метод splice() 
// - Видалити 
// - Додати 
// - Оновити 

// Видалення (по індексу), метод indexOf()
const cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5']
const cardToRemove = 'Картка-3' 
const index = cards.indexOf(cardToRemove)
cards.splice(index, 1)
console.table(cards)


// Додавання (по індексу)
const cardsProduct = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5']
const cardToAdd = 'Картка-6'
const item = 3
cardsProduct.splice(item, 0, cardToAdd)
console.table(cardsProduct)


// Оновлення (по індексу) 
const cardsPrice = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5']
const cardToUp = 'Картка-4'
let newCard = "Оновлена Картка-4" 
const indexCardToUp = cardsPrice.indexOf(cardToUp)
cardsPrice.splice(indexCardToUp, 1, newCard)
console.table(cardsPrice)