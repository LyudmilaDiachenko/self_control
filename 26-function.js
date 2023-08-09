
//  Функції
// - Функціональні вирази
// - Аргументи та параметри
// - return - повернення значення, вихід з функції
// - Повернення значень

// Види запису функції:

// 1. Через змінну: 
const add = function(x, y){}

function add (){}  //оголошення функції
add()  //виклик функції

// Стрілкова функція
const addNumber = () => {}
addNumber()

// 
const addNum = function(x, y){
    console.log(x)
    console.log(y)
    return x + y
}

addNum(10)
console.log(addNum(10, 20)) //виклик функції
const r2 = addNum(5, 45) //перевикористання функції
console.log("Rezaly r2:", r2)
const r3 = addNum(15, 40) //перевикористання функції
console.log("Rezaly r3:", r3)

const itemFunction = function(value){
    console.log(1)
    console.log(2)
    if (value < 50){
        return "Менше 50"
    }
        return "Більше 50"
}
console.log("Результат функції:", itemFunction(10))

// - Стек викликів
// - Stack trace та пошук помилок


function fnA(){
    console.log("Виконується fnA")
}
function fnB(){
    console.log("Виконується fnB")
}
function fnC(){
    console.log("Виконується fnC")
}
console.log("log before fnA")
fnA()
    console.log("log after fnA")
    console.log("log before fnB")

fnB()
    console.log("log after fnB")
    console.log("log before fnC")

fnC()
    console.log("log after fnC")

