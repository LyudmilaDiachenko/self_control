// Напиши функцію findLogin(allLogins, login) для пошуку логіна ʼ
// Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдений.'
// Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдений.'

// function findLogin(logins, login2search) {
//     for(let login of logins) {
//         if(login === login2search) {
//             return `Користувач ${login2search} знайдено`
//         }
//     }
//     return `Користувач ${login2search} не знайдено`
// }
// console.log(
//     findLogin(
//         ["djeirh", "fjikesyr", "sjfheur", "fjikesdfyr"], 
//         "sfheur"
//     )
// )

// ================================================================
const allLog = ["djeirh", "fjikesyr", "sjfheur", "fjikesdfyr"]
let login2search = "fjiksssesyr"
function find(allLog, login2search){
    return allLog.includes(login2search)
    ? `Користувач ${login2search} знайдений.`
    : `Користувач ${login2search} не знайдений.`
}

console.log(find(allLog, login2search))