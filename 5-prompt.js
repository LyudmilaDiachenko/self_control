
// prompt() - метод об'єкту, який показує модальне вікно з повідомленням і полем для вводу, а також кнопками Ок і Відміна.
// const qantity = prompt("Введіть кількість товару")               // вертає рядок
// const qantity = Number(prompt("Введіть кількість товару"))      //  вертає число


// const hello = prompt('Як Вас звати?', '')
// console.log(hello)

// const firstMassege = Number(prompt('Введіть перше число:','0'))
// const secondMassege = Number(prompt('Введіть друге число:','0'))
// console.log(firstMassege + secondMassege)

// const fist = Number(prompt("Дай число"))
// const second = Number(prompt("Ще число"))
// console.log(fist ** second)

const qantity = prompt("Введіть кількість товару");
const price = prompt("Яка вартість товару?");
const totalPrice = qantity * price;
console.log(totalPrice);

const type = typeof qantity;
console.log(type);