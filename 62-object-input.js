// Напишіть скрипт, який почерзі запитує імʼя, вік та зарплату 
// та виводить в консоль обʼєкт лише з тими полями, які були вказані

const name = prompt('Please enter name')
const age = prompt('Please enter age')
const salary = prompt('Please enter salary')

// const user = { name, age, salary }
// console.log(user)

const user1 = {}
    if (name) user1.name = name
    if (age) user1.age = age 
    if (salary) user1.salary = salary 
console.table(user1)

const user2 = {
    ...(name && {name}),
    ...(age && {age}),
    ...(salary && {salary}),
}
console.table(user2)