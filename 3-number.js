// Числа
// Namber() - Повертає число, конвертоване з його аргумента
// parseFloat() - Аналізує(парсить) свій аргумент і повертає число з плаваючою точкою
// parseInt() - Аналізує(парсить) свій аргумент і повертає ціле число
// toFixed - формує число з фіксованою крапкою


// parseInt()
let elementWidth = '50px'
elementWidth = Number.parseInt(elementWidth)
console.log(elementWidth)

let widthTable = '200cm'
widthTable = Number.parseInt(widthTable)
console.log(widthTable)

// parseFloat()
let elementHeight = '200.74px'
elementHeight = Number.parseFloat(elementHeight)
console.log(elementHeight)

let heightHuman = '185.59cm'
heightHuman = Number.parseFloat(heightHuman)
console.log(heightHuman)

// toFixed
let salary = 130.0386
salary = Number(salary.toFixed(3))
console.log(salary)

let long = 674.98643902
long = Number(long.toFixed(5))
console.log(long)

// let qantity = "50"
// let messege = "hi"
// console.log(Number(qantity))
// console.log(Number(messege))