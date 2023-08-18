
// Операція spread (розпилення)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr2 = [10, 20, 30, 40, 50, 60]
// const arr3 = [70, 80, 90, 100]

// Зшиваємо кілька масивів в один через concat()
// const result = arr.concat(arr2, arr3)
// console.log(result)

// Розпилюємо кілька масивів в один через spread
// const result2 = [1000, ...arr, ...arr2, ...arr3]
// console.log(result2)

//*! Пошук найменшої або найбільшої температури (числа)
//*: Пошук найменшої або найбільшої температури (числа)
//*? Пошук найменшої або найбільшої температури (числа)

const temps = [18, 24, 10, 35, 21]
console.log(Math.max(18, 24, 10, 35, 21))
console.log(Math.min(18, 24, 10, 35, 21))
console.log(Math.max(...temps))
console.log(Math.min(...temps))

//*! Розпилення  об'єктів
//*! Object.prototype.assign() - поєднання об'єкта  та spread
const a = {
    x: 1,
    y: 2
}
const b = {
    x: 0,
    c: 3
}
const g = Object.assign({name: 'Olga'}, a, b)
console.log(g)
const f = {name: 'Olga', ...a, ...b}
console.log(f)
console.log({...a, ...b})

const defaultSettings = {
    theme: "light",
    showMessage: true,
    hideSidebar: false,
}
const userSettings = {
    showMessage: false,
    hideSidebar: true,
}
const finalSettins = {
    ...defaultSettings,
    ...userSettings
}
console.log(finalSettins)