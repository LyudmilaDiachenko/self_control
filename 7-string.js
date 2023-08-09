
// length - довжина  рядка 
// Конкатенація рядків - поєднання
// Шаблонні рядки
// toLowerCase() - перетворює рядок на малі літери, не змінює вихідний рядок.
// toUpperCase() - метод перетворює рядок на великі літери, не змінює вихідний рядок.
// slice - вирізає частину чого-небуть
// includes() - пошук в стрічці
// replace - шукає та замінює
// Апостроф \' - ектрануючий символ може використовуватися для вставки спеціальних символів в рядку
// Перенос на наступний рядок - \n

// length
const massage = "Рахуємо довжину рядка"
console.log(massage.length)

const messageNew = "Тут невідома кількість символів"
console.log(messageNew.length)

// Конкатенація рядків
const firstName = "Lyudmula"
const secondName = "Diachenko"
const age = 20
const aboutMe = firstName + ' ' + secondName + ' ' + age
console.log(aboutMe)

const guestName = 'Mark'
const guestSecondName = 'Black'
const room = 716
const type = 'standart'
const aboutGuest = 'Гість: ' + guestName + ' ' + guestSecondName + '. ' + 'Поселяється в: ' + room + ' номер. ' + 'Тип номеру: ' + type
console.log(aboutGuest)

// Шаблонні рядки
const aboutGuests = `Гість - ${guestName} ${guestSecondName}. Поселяється в номер: ${room}. Тип номеру: ${type}`
console.log(aboutGuests)

const quantity = 15
const orderMsg = `Ви купили ${quantity} холодильників.`
console.log(orderMsg)

// toLowerCase()
let userMessageInput = prompt("Вкажи щось")
userMessageInput = userMessageInput.toLowerCase()
console.log(userMessageInput)

// toUpperCase()
userMessageInput = userMessageInput.toUpperCase()
console.log(userMessageInput)

// slice
let brands = 'SamSUnG'
console.log(brands[4])
console.log(brands.slice(1).toLowerCase())
brands = brands[0] + brands.slice(1).toLowerCase()
console.log(brands)

// includes()
const firstWord = "дуже"
const secondWord = "день"
const firstString = "Я дуже люблю програмувати"
const secondString = "Сьогодні чудовий день"
console.log(firstString.includes(firstWord))
console.log(firstString.includes(secondWord))

const blackList = "спам"
const blackList2 = "розпродаж"

const string = "Я шейх, спам, даю тобі мільйон"
const string1 = "Найбільш великий Розпродаж цього тижня, не пропустіть"
const string2 = "Рекламна компанція ОРЛОРАГКВ"

console.log(string.includes(blackList))
console.log(string1.toLowerCase().includes(blackList2))
console.log(string2.includes(blackList2))


// replace
const school = "ItStep"
let groupNumder = "Pront-End31"
const name = "Lyumdula"

groupNumder = groupNumder.replace("P", "F")
const schoolResult = `Я студентка ${school}, навчаюся в групі ${groupNumder}. Мене звати ${name}`
console.log(schoolResult)

let str = 'Hi';
str = 'P' + str[1]; //1 - символ, який залишаємо (додаємо в новий рядок)
console.log(str);

// Апостроф
const backticks = "Це it's з інформацією про клієнта";
console.log(backticks);

const answer = "Ім\'я";
console.log(answer);

// Перенос на наступний рядок
const list = `Lyudmula\nDiachenko\nVinnytsia\n`;
console.log(list);

