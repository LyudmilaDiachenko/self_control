
// Напиши скрип, який рахує суму елементів двох масивів 

const firstArray = [2, 4, 6]
const secondArray = [7, 9, 11]
let sum = 0

let allArray = firstArray.concat(secondArray)
for (let i = 0; i < allArray.length; i++){
    sum += allArray[i]
}
console.log(sum)
