
// Напиши функцію changeCase(string) яка міняє регістр
// кожного слова в рядку на протилежний.
// Наприклад, якщо рядок  «JavaScript», то на виході має бути «jAVAsCRIPT».


// const str = "JavaScript"

// function changeCase(string) {
//     const letters = string.split("")
//     let invertedString = ""
//     for (const letter of letters) {
//         const rezalt = letter === letter.toLowerCase()
//         invertedString += rezalt
//             ? letter.toUpperCase()
//             : letter.toLowerCase()
//     }
//     return invertedString
// }
// console.log(changeCase(str))

function changeCase(string) {
    const letters = string.split("")
    let invertedString = ""
    for (const letter of letters) {
        if (letter === letter.toLowerCase()) {
            invertedString += letter.toUpperCase()
        } else {
            invertedString += letter.toLowerCase()
        }
    }
    return invertedString
}
console.log(changeCase(str))