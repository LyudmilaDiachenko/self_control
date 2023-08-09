
// Псевдомассив arguments и Array.from и ...
// Arguments не має в стілкових функціях

// function fn() {
//     console.log(arguments)
//     console.log(...arguments) // розпилення
// }
// fn(1, 2, 3, 4)

// function fnA(a, b, c, ...args) {
//     console.log(`${a}, ${b}, ${c}`)
//     console.log(...args)
// }
// fnA("hellow", 1, 2, 3, true, false, { a: 23, b: 67, c: 6 })


// Напиши функцію add для додавання довільної кількості аргументів (чисел)
// - Операція ... (rest)


function add(...args) {
    console.log(...args)
    let total = 0
    for (let arg of args) {
        total += arg
    }
    return total
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 8))


// Напиши функцію filterNumbers(array [, number1, ...]) яка:
// - першим аргументом приймає масив чисел
// - після першого аргумента може бути довільна кількість інших аргументів, які будуть числами.
// - Функція має повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого,
// для яких є аналог в оригінальному масиві.

function filterNumbers(array, ...args) {
    console.log(array)
    console.log(...args)
    const result = []
    for (const element of array) {
        if (args.includes(element)) {
            result.push(element)
            console.log(`${element} є кругом`)
        }
    }
}

console.log(filterNumbers([1, 22, 56, 8], 1, 44, 67, 23, 56))