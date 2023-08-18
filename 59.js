// Напишіть функцію calculateAverage(), 
// яка приймає довільну кількість аргументів та повертає 
// їх середнє значення. Всі аргументи числа.

//*! Масив чисел
// const arr = [23, 5, 67, 3, 89, 65]
// function calculateAverage(args){
//     let sum = 0
//     for(const arg of args){
//         sum += arg
//     }
// console.log(sum)
//     const average = sum / args.length
//     return average
// }
// console.log(calculateAverage(arr))

// reduce 
// const arr = [23, 5, 67, 3, 89, 65]
// function calculateAverage(args){
//     return args.reduce((total, arg) => total + arg) / args.length
// }
// console.log(calculateAverage(arr))

//*! Набір чисел
const arr = (23, 5, 67, 3, 89, 65)
function calculateAverage(...args){
    console.log(args)
    return args.reduce((total, arg) => total + arg) / args.length
}

console.log(calculateAverage(arr))