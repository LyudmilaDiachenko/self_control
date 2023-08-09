/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення  'Користувач [логін] не існує.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() з тернарним оператором
 */

const logins = ['slkjd', 'wrei82640kdn', 'vnue732']
let toFind = 'wrei82640kdnsss'
let message = `Користувач ${toFind}  не знайдено.`

for(let i = 0; i < logins.length; i++) {
    if (logins[i] === toFind) {
        message = (`Користувач ${toFind} знайдено.`)
    } 
}
console.log(message)

for(let login of logins) {
    if (login === toFind) {
        message = (`Користувач ${toFind} знайдено.`)
        break
        }
}
console.log(message)


// Метод includes
for(let login of logins) {
    if(login.includes(toFind)){
        message = (`Користувач ${toFind} знайдено.`)
        break
    }
}
console.log(message)

// Варіант з тернарним оператором
const allLogins = ['slkjd', 'wrei82640kdn', 'vnue732']
let toFindLogins = 'wrei82640kdn'
const messageRezult = logins.includes(toFindLogins)
? `Користувач ${toFindLogins} знайдено.` 
: `Користувача ${toFindLogins}  не знайдено.`

console.log(messageRezult)