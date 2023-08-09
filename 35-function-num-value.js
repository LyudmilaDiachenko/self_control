// Напиши функцію logItems(array), яка отримує масив та використовує цикл for, 
// який для кожного елемету масива буде виводи в консоль повідомлення 
// в форматі <номер елемента> - <значення елемента>. 
// Нумерація елементів має починатись з одиниці

const items = ["java script", "pyton", "java", "c++", "react"];

function logitem(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logitem(items)
