// Напиши скрипт який рахує суму всіх парних чисел в масиві.

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0


for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    
    if (number % 2 === 0) {
        console.log('Парне');
        total += number;
    }
}
console.log('сума:', total)


for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(`${number} - парне`);
        total += number;
    }
}
console.log('сума:', total)


for (let number of numbers) {
    if (number % 2 !== 0) {
        console.log(`${number} - не парне! Цю ітерацію ми пропускаємо`);
        continue
    }
    console.log(`${number} - парне!`);
        total += number;

}
console.log('сума:', total)