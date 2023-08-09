// Напиши функцію myFunc(items)
// яка повертає масив цін (чисел) та повертає їх суму


const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

function myFunc(items){
    let sum = 0
    for(cart of items){
        sum += cart
    }
    return sum
}
console.log(myFunc(carts));

const myFuncS = myFunc([1, 5, 8, 2])
console.log(myFuncS)
