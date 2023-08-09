
// Напиши функцію smallNumber(numbers) для пошуку найменшого числа масиву,
// при умові, що числа унікальні (не повторюються).


const numbers = [34, 76, 6, -89, 3, 9]

function smallNumber(){
    let min = numbers[0]
    for(let number of numbers){
        if(number < min){
            min = number
        }
    }
    return min
}
console.log(smallNumber(numbers))