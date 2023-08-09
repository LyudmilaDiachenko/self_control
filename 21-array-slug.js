
// Робимо slug в URL з назви статті (наприклад на dev.to) 
// Заголовок статті складається лише з букв та пробілів 
// - Нормалізуємо рядок 
// - Розбиваємо по словам 
//Зшиваємо в рядок із роздільниками 
 
// Має вийти  top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework'
const normalizedTitle = title.toLowerCase()
const words = normalizedTitle.split(' ')
const slug = words.join('-')
console.log(slug)

// Або скорочений варіан - ланцюг методів
const title2 = `top 10 benefits of react framework`
const slug2 = title2.toLowerCase().split(' ').join('-')
console.log(slug2)