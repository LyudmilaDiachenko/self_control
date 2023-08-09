// Math - дозволяє виконувати математичні задачі з числами
// Синтаксис для будь-яких математичних методів є: Math.method(number)
// Math.round(x) - поверне x, округлене до найближчого цілого числа
// Math.ceil(x)	- поверне x, округлене в більший бік до найближчого цілого числа
// Math.floor(x) - поверне x, округлене в меньший бік найближчого цілого числа
// Math.trunc(x) - поверне цілу частину x (нове в ES6)
// Math.pow(x, y) - поверне значення x в степені y
// Math.sqrt(x) - поверне квадратний корінь із x
// Math.abs(x) - поверне абсолютне (позитивне) значення x
// Math.sin(x) - поверне синус (значення між -1 та 1) куту x (в радіанах)
// Math.cos(x) - поверне косинус (значення між -1 та 1) куту x (в радіанах)
// Math.min() та Math.max() - може використовуватись для пошуку найменшого або найбільшого значення в списку аргументів
// Math.random() - поверне рандомне (випадкове) число між 0 (включно) та 1 (не включаючи)

const base = 2
const power = 5

const result = Math.pow(base, power)
console.log(result)
console.log(base ** power)

const max = 80
const min = 20
// const result = Math.random()*(max-min)+min
const total = Math.round(Math.random()*(max-min)+min)
console.log(total)