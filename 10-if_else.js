
// Оператор розгалуження if...else
if (5 > 30) {
    console.log("Умова виконалася?")//в консолі нічого не виведеться, бо умова не виконалася     
}

if (5 > 30) {
    console.log("Умова виконалася")    
}else{
    console.log("Умова не виконалася")
}

// Оператор розгалуження else...if
const salary = 1000
if (salary <= 0) {
    console.log("Скасовано")    
}else if (salary < 500){
    console.log("Не достатньо товару")
}else if (salary > 500){
    console.log("Достатньо товару")
}else{
    console.log("Допобачення")
}

// Тернарний оператор - balance >=0 (умова) ? (true) : (false)

const balance = -200

const massage1 = balance >=0 ? "Позитивний баланс" : "Негативний баланс";
console.log(massage1)