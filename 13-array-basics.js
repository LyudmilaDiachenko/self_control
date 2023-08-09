// Масивами
// Оголошення: []
// Індексація: поченається з нуля
// Довжина: length
// Індекс останього елемента: length - 1
// Перевизначення: friends[2] = 'true'

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.log(friends)
console.table(friends)
friends[0] = 'sdjkfklsjdz'
friends[1] = '2'
friends[2] = 'true'
console.table(friends)

const arrLength = friends.length
console.table(arrLength)
friends[1] = '2'
const lastLength = friends.length-1
console.table(lastLength)


// Передача по посиланню та по значенню
// Примітиви та складні типи
// Посилкова рівність (referential equality)

const a = [1, 2, 3, 4, 5, 6, 7]
const b = a
console.log('a', a)
console.log('b', b)

a [0] = 500
console.log('a', a)
console.log('b', b)

let c = 4
let d = c
console.log('c', c)
console.log('d', d)
d = 10
console.log('c', c)
console.log('d', d)


// Перебір (ітерація) масива
// for - якщо потрібен індекс або потрібно змінити елемент масива
// for...of - якщо індекс не потрібен і в масиві нічого міняти не потрібно
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.log(friends);
const lastLengths = friends.length-1

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);    
}

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.log(friends[1][2])