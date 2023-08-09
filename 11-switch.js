const starsRoom = 6
let priceRoom

if(starsRoom === 1){
    priceRoom = 20
}else if(starsRoom === 2){
    priceRoom = 30
}else if(starsRoom === 3){
    priceRoom = 50
}else if(starsRoom === 4){
    priceRoom = 70
}else if(starsRoom === 5){
    priceRoom = 120
}else{
    console.log("Таких зірок не має")
}

console.log(priceRoom)


// switch
const stars = 5
let price
switch(stars){
    case 1:
        price = 20
        break
    case 2:
        price = 30
        break
    case 3:
        price = 50
        break
    case 4:
        price = 70
        break
    case 5:
        price = 120
        break
    default:
        console.log("Таких зірок не має")
}
console.log(price)


const starsHotel = 5
let priceHotel

if (starsHotel === 1 || starsHotel === 2){
    priceHotel = 20
}else if (starsHotel === 3 || starsHotel === 4){
    priceHotel = 30
}else if (starsHotel === 5){
    priceHotel = 120
}else{
    console.log("Таких зірок не має")
}
console.log(priceHotel)


// switch(stars){
//     case 1:
//     case 2:
//         price = 20
//         break
//     case 3:
//     case 4:
//         price = 30
//         break
//     case 5:
//         price = 120
//         break
//     default:
//     console.log("Таких зірок не має")
// }
// console.log(price)


// const options = 6
// let message = "Замовлення не знайденою. Купи щось"
// switch (options) {
//     case 1:
//         message = "Ви можете забрати товар завтра з 12:00 в нашому офісі"
//         break;
//     case 2:
//         message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00"
//     break;
//     case 3:
//         message = "Посилка буде надіслана сьогодні"
//     break;    
//     default:
//         console.log("Вам зателефонує наш менеджер")
// }
// console.log(`Статус вашого замовлення: ${message}`)


// let mood = prompt("Як настрій?")
// switch(mood){
//     case "happy":
//         alert("😊")
//         break
//     case "sad":
//         alert("😞")
//         break
//     case "angry":
//         alert("😡")
//         break
//     default:
//         aleart("😎")           
// }
// console.log(mood)