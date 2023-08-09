// Вилучити перших три символи - slice
const numberFriends = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstThree = numberFriends.slice (0, 3)
console.log(firstThree)

// Вилучити останні три числа - slice
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const resultNumber = number.slice(-3)
console.log(resultNumber)

// split - розбити масив з рядка  
// (якщо без пробілу ("") - розіб'є на букви) 
const strSplit = "split - Розбити рядок"
console.log(strSplit.split(" "))

// join - перетворює рядок в масив 
const strJoin = ["Зібрати", "рядок", "в", "масив"]
console.log(strJoin.join(" "))

// indexOf - вказує індекс де знаходиться значення
const strIndexOf = ["Зібрати", "рядок", "в", "масив"]
console.log(strIndexOf.indexOf("Зібрати"))

// includes - шукає значення - повертає true чи false 
const strIncludes = ["Зібрати", "рядок", "в", "масив"]
console.log(strIncludes.includes("Зібрати"))

// push - додає елемент в кінець масиву
const arrayPush = [23, 34, 56, 34, 67, 89]
const value = 105
arrayPush.push(value)
console.log(arrayPush)

// // pop
// const arrayPop = [23, 34, 56, 34, 67, 89, 105]
// let = arrayPop.pop()
// console.log(arrayPop)

// concat - об'єднує масиви
const arrayNumberPush = [23, 34, 56, 34, 67, 89]
const arrayNumberPop = [3, 64, 6, 30, 65, 9, 105]
const arrayNumberSlice = [43, 52, 98, 4, 24, 1]
const arrayAll = arrayNumberPush.concat(arrayNumberPop, arrayNumberSlice)
console.log(arrayAll)

// splice - універсальний метод який додає і видаляє значення при цьому змінює масив
const array5 = [23, 34, 56, 4, 67, 89]
const rezults = array5.splice(3, 2)
console.log(rezults, array5)

const arrayFirst = [3, 59 , 90, 89]
const arraySecond = [4, 24, 1, 56]
let arrays = arrayFirst.concat(arraySecond)
let total = 0
for(let array of arrays){
    total += array
}
console.log(total)

for(i = 1; i < 10; i++) {
    console.log(`на ${i}`)
    for(j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}


const num = parseInt(prompt('Введи число'))
if(num > 0){
    for(i = 1; i < 10; i++) {
        console.log(`${i} * ${num} = ${i * num}`)
    }
}else{
    console.log(`Введи число більше 0`)
}