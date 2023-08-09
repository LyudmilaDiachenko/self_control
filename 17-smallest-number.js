
// Напиши скрипт пошуку найменшого числа в масиві,
// при умові, що числа унікальні (не повторяюються).


const numbers = [12, 56, 83, 94, 3, 78, 65, 45];
let min = numbers[0]
for (let number of numbers) {
    if (number < min) {
        min = number
    }
}
console.log("Найменше", min)