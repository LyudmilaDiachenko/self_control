// Задача 1
// Напиши скрипт, який для обʼєкта user, послідовно

// 1. Додає поле mood з значенням 'happy'
// 2. Міняє значення hobby на 'skydiving'
// 3. Міняє значення premium на false
// 4. Виводить вміст обʼєкта user в форматі ключ: значення
// Використовуємо Object.keys() та for ... of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    addMood(value){
        this.mood = value 
    },// 1
    changeHobby(newHobby){
        this.hobby = newHobby
    },// 2
    changePremiun(newPremiun){
        this.premiun = newPremiun
    },// 3
    
};

// 3
function newArray(params){
    const arr =[]
    for(const param of params){
        console.log(`${param}: ${user[param]}`)
    }
}
user.addMood('happy')
user.changeHobby('skydiving')
user.changePremiun(false)
newArray(Object.keys(user))
console.table(user)