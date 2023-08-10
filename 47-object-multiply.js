
//Задача 7
//Створіть функцію multiplyNumeric(obj), 
//яка множить всі числові властивості обʼєкта на 2

const menu = {
    width: 200,
    height: 300,
    tittle: 'My menu',
};
function multiplyNumeric(obj){
  for(const i in obj){
    if(typeof obj[i] === 'number'){
      obj[i] *= 2
    }   
  } 
  return obj;
}
console.table(multiplyNumeric(menu));