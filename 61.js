// Напишіть функцію getObjectWithoutProperty, яка приймає обʼєкт, 
// назву властивості та повертає копію обʼєкта без цієї властивості

const user = {
    name: "Ivan",
    age: 29,
    hobby: "html",
    premiun: true,    
}
function getObjectWithoutProperty(obj, key){
    const newObj = {...obj}
    delete newObj[key]    
    return newObj
}
console.log(getObjectWithoutProperty(user, "name"))