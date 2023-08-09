// Ви програмуєте онлайн магазин і потрібно створити функцію, 
// яка приймає на вхід об'єкт з інформацією про товар, включаючи назву
// товару, його ціну та кількість на складі. 
// Функція повинна 
// повертати рядок з описом товару та його ціни з подальшим 
// застосуванням знижки, якщо така є. Якщо товару немає на складі, 
// функція повинна повернути повідомлення про це.

const product1 = {
    name: 'Сорочка',
    price: 100,
    stock: 10,
    discount: 20,
};
  
const product2 = {
    name: 'Кроси',
    price: 500,
    stock: 80,
    discount: 10,
};
const product3 = {
    name: 'Шкарпетки',
    price: 45,
    stock: 0,
    discount: 0,
};

function generateDescription({name,price,stock,discount}){
    if(stock === 0){
        return `Товару не має на складі немає`
    }else{
        return `${name} по ${price * (100 - discount) / 100} за штуку`
    }
}

console.table(generateDescription(product1))
console.table(generateDescription(product2))
console.table(generateDescription(product3))