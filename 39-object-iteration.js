
//  Перебір через for...in та Object.keys|values|entries

const feddBack = {
    good: 15,
    neutral: 10,
    bad: 3,
}
let sumFeedBack = 0

// // Object.keys
// const keyS = Object.keys(feddBack)
// console.log(keyS) // Масив ключів
// const valueS = Object.values(feddBack)
// console.log(valueS) //Масив значень
// const data = Object.entries(feddBack)
// console.log(data[0]) //Масив - ключ: знвчення



// const keys = Object.keys(feddBack)
// for(const key of keys) {
//     console.log(key)
//     console.log(feddBack[key])
//     sumFeedBack += feddBack[key]
// }
// console.log(sumFeedBack)
// або
const values = Object.values(feddBack)
for(const value of values) {
    sumFeedBack += value
}
console.log(sumFeedBack)