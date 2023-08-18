
// Використовуючи Object.entries() та деструктуризацію напиши скрипт, 
// який виводить вміст обʼєкта user в форматі ключ: властивість

const user = {
    name: "Ivan",
    age: 29,
    hobby: "html",
    premiun: true,    
}
const arrs = Object.entries(user)
for(const [key, value] of arrs) {
    console.log(`${key}: ${value}`)
}
