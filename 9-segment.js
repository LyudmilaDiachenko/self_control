// Логічні оператори: або - ||, та - &&, ні - !
// || (або) - перший true. 
// && (та) - перший false. Щоб викнувалася умова мають бути всі true. Зупиняється на брехні false.
// Повертає те на чому зупинилось, тобто останій операнд
// Логічне НІ (оператор !)
// Робить інверсію правда > брехня і брехня > правда


const x1 = 10
const x2 = 30
const number = 55

console.log(`Число ${number} попадає в проміжок до ${x1}` , number < x1)
console.log(`Число ${number} попадає в проміжок більше ${x2}` , number > x2)
// ||
const results = number > x1 || number < x2
console.log(results) //Поверне true - бо (55  > 10) оператор || перевірив першу умову і там було true він його повертає, а дальше не виконує
// &&
const result = number > x1 && number < x2
console.log(result) //Поверне false - (55  > 10 та 55 < 30(не правильно)) поверне false оператор перевірив першу умову там було true іде далі перевірив другу умову, а там false і повене перший false

// Напиши скрипт, який перевіряє можливість відкрити сїчат з користувачем.
// Для цього користувач має бути:
//  - другом
//  - бути онлайн
//  - бути бе режиму "не турбувати"

const isFriend = true
const isOnline = true
const isDnd = false

const canOpenChat = isFriend && isOnline && isDnd
console.log("Можна відкрити йому чат?", canOpenChat)

const canOpenChats = isFriend || (isOnline && isDnd)
console.log("Можна відкрити йому чат?", canOpenChats)

// Напиши скрипт підписки користувача при доступі до контенту
// Є три типи підписки: free, pro, vip
// Отримати доступ можна лише користувачеві pro та vip

const write = "vip"

const canAccses = write === "pro" || write === "vip"
console.log("Є доступ?", canAccses)

