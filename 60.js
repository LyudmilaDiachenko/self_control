// Використовуючи Object.entries() та деструктуризацію напиши скрипт, 
// який виводить вміст обʼєкта user в форматі ключ:властивість

const user = {
    name: "Ivan",
    age: 29,
    hobby: "html",
    premiun: true,    
}
const arrs = Object.entries(user)
console.log(arrs)


for(const arr of arrs) {
    console.log(arr)
    const[key, value] = arr
    console.log(`${key}:${value}`)
}
