// Напиши скрипт який заміняє регістр кожного слова в рядку на протилежний.
// Наприклад, якщо рядок «JavaScript», то на виході має бути рядок «jAVAsCRIPT».

                                                // Version 1
// const str = "HeLLo WoRD"
// let output = str.slice(0, 1).toLowerCase() + str.slice(1, 2).toUpperCase() + str.slice(2, 4).toLowerCase() + 
// str.slice(4, 5).toUpperCase() + ' ' + str.slice(6, 7).toLowerCase() + str.slice(7, 8).toUpperCase() + 
// str.slice(8).toLowerCase()
// console.log(output)

// const str = "HeLLo WoRD"
// let arrayStr = str.split('').map(char => char.charCodeAt(0) < 97 ? char.toLowerCase() : char.toUpperCase()).join('')
// console.log(arrayStr)

                                                // Version 2
// let str = "BiG bEN"
// let arrayStr = str.split('')
// let result 

// for (let i = 0; i < arrayStr.length; i++) {
//     if (arrayStr[i].charCodeAt(0) < 97) {        
//         arrayStr[i] = arrayStr[i].toLowerCase()
//     } else {
//         arrayStr[i] = arrayStr[i].toUpperCase()
//     }
// }
// result = arrayStr.join('')
// console.log(result)

                                                // Version 3
// let str = "LoNDon IS The CaPital Of GrEAt BRitAin"
// let arrayStr = str.split('')
// let maxWorld = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S","D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
// let minWorld = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
// let result 

// for (let i = 0; i < arrayStr.length; i++) {
//     if (maxWorld.includes(arrayStr[i])){ 
//         arrayStr[i] = arrayStr[i].toLowerCase()
//     }else if (minWorld.includes(arrayStr[i])) {
//         arrayStr[i] = arrayStr[i].toUpperCase()        
//     }
// }
// result = arrayStr.join('')
// console.log(result)

                                                // Version 4
let str = "LoNDon IS The CaPital Of GrEAt BRitAin"
let arrayStr = str.split('')
let maxWord = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S","D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
let minWord = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
let result
let index

for (let i = 0; i < arrayStr.length; i++) {
    if ((index = maxWord.indexOf(arrayStr[i])) != -1) {
        arrayStr[i] = minWord[index]
    } else if ((index = minWord.indexOf(arrayStr[i])) != -1) {
        arrayStr[i] = maxWord[index]
    }
}
result = arrayStr.join('')
console.log(result)
