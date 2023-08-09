
// Цикл for
// i - початок циклу
// i < 10 - умова до якого моменту буде йти цикл
// i++ крок
// 

for(let i = 0; i < 10; i++){
    console.log("Це кожна ітерація", i)
}

const word = "SaMSung"
let result = ''

for(let i = 0; i < word.length; i++){
    console.log(word[i])
    if(word[i] === word[i].toUpperCase()){
        result +=  word[i].toLowerCase()
    }else{
        result +=  word[i].toUpperCase()
    }
}
console.log(result)


const employees = 12
const minSalary = 500
const maxSalary = 5000
let totalSalary = 0
// Перебрали працівників циклу

for(let i = 0; i < employees; i++){
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
    console.log(`Зарплата співробітника ${i + i}: ${salary}`)
    totalSalary += salary
};
console.log(`totalSalary:`, totalSalary)

const min = 10
const max = 50
let total = 0

for(let i = min; i < max; i+= 15){
    if(i % 2 !== 0){
        console.log(`Не парні;` + i)
        continue;
    }
    console.log(`Парні:` + i)
    total += i
}
console.log(`total:` + total)

/*
 * Напиши скрипт опрацювання покупки в магазині.
 *
 * - Баланс користувача зберігається в змінній balance
 * - Сума покупки зберігається в змінній payment
 *
 * - Перед перевіркою вивести повідомлення:
 * «Загальна вартість замовлення [число] кредитів. Перевіряємо к-ть доступних коштів на рахунку»
 *
 * - Якщо сума покупки не перевищує баланс:
 *    - Відняти з баланса суму покупки
 *    - Вивести повідомлення «На рахунку залишилось [число] кредитів»
 * - Якщо сума покупки перевищує баланс:
 *    - Вивести повідомлення «На рахунку недостатньо коштів для проведення транзакції!»
 * - В кінці вивести повідомлення «Операцію завершено»
 */

let balance = 10000
const payment = 12000

console.log(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо к-ть доступних коштів на рахунку`)

if(payment <= balance){
    balance -= payment
    console.log(`На рахунку залишилось ${balance} кредитів`)
}else{
    console.log(`На рахунку недостатньо коштів для проведення транзакції!`)    
}

console.log(`Операцію завершено`)

/* 
 * Напиши скрипт підрахунку суми покупки з знижкою в залежності 
 * від витраченої суми за весь час (партнерська програма). 
 * 
 * - Загальна сума витрачених коштів зберігається в змінній totalSpent 
 * - Сума поточного платежу зберігається в змінній payment 
 * - Знижка зберігається в змінній discount 
 * 
 * - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2% 
 * - Якщо витрачено від [1000 до 5000) - срібний партнер, скидка 5% 
 * - Якщо витрачено більше [5000 - золотий партнер, скидка 10% 
 * - Якщо витрачено менше 100) - не партнер, знижка 0% 
 * 
 * - В результаті вивести повідомлення 
 * Оформляємо замовлення на суму [сума] з знижкою [знижка]%» 
 */

let totalSpent = 2000
let payments = 500
let discount = 0

if(totalSpent >= 100 && totalSpent <= 1000){
    console.log('Бронзовий партнер, знижка 2%')
    discount = 0.02
}else if (totalSpent > 1000 && totalSpent <= 5000){
    console.log('Срібний партнер, скидка 5%')
    discount = 0.05    
}else if (totalSpent > 5000){
    console.log('Золотий партнер, скидка 10%')
    discount = 0.01 
}else{
    console.log('Не партнер, знижка 0%')        
}

payments -= payments * discount
console.log(`Оформляємо замовлення на суму ${payments} з знижкою ${discount * 100}%`)

totalSpent += payments
console.log(`Загальна сума коштів витрачених в магазині: ${totalSpent}`)