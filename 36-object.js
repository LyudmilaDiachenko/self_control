
// Об'єкти (робимо плейлист музики: ім'я, рейтинг, треки, кількість треків)
// - Літерал об'єкта
// - Властивості, ключі (ім'я) та значення
// - Як відрізнити об'єкт від області видимості

// const playlist = {
//     name: "My play list",
//     rating: 5,
//     tracks: ["Track1", "Track2", "Track3", "Track4", "Track5"],
//     play: false,
//     trackCount: 3,
// }
// console.log(playlist)
// console.dir(playlist)

// function fn(playlist){
//     console.log(playlist.name)
//     console.log(`${playlist.name} має рейтинг ${playlist.rating} та включає ${playlist.tracks.length} треків`)
// }
// fn(playlist)

// function fnPlay(playlist){
//     if (playlist.play){
//         console.log(`${playlist.name} має рейтинг ${playlist.rating} та включає ${playlist.tracks.length} треків. Зараз ргає музика.`)
//     return    
// }   
//     console.log("Запустіть плей лист")
// }
// fnPlay(playlist)

// Доступ до властивості
// - obj.key
// - obj['key']
// - Відсутні властивості


// const playlist2 = {
//     name: "My play list",
//     rating: 5,
//     tracks: ["Track1", "Track2", "Track3", "Track4", "Track5"],
//     play: false,
//     trackCount: 3,
// }
// // Два види доступу до ключа
// console.log(playlist2.rating)
// console.log(playlist2['rating'])
// console.log(playlist2.propertyName)
// console.log(playlist2['propertyName'])


// // Короткий запис властивостей
// const userName = prompt("Дай ім'я")
// const email = `${userName}@mail.com`

// const signUp = {
//     userName,
//     email
// }
// console.log(signUp)


// Обчислювані властивості

// {
// <input name="color" value="black">
// }

// const inputName = 'color'
// const inputValue = 'black'
// const colorPicker = {
//     [inputName]: inputValue, //[inputName] - ключ. inputValue - значення
// }
// console.log(colorPicker)

// Масиви та функції це об'єкти

const a = [1, 2, 3, 4, 5, 6, 7]
a.hello=':)'
console.log(a)

function fnA(){
    console.log('hello')
 
}
fnA.hello = ':)'
console.log(fnA.hello)