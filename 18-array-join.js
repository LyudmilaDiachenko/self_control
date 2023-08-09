
// Напиши скрипт, який обєднує всі елементи масиву в один рядок.
// Елементів може бути довільна кількість.
// Нехай елементи масива в рядку будуть розділені комами.
// - Спочатку через for
// - Потім через join()
// - Має вийти 'Mango,Poly,Kiwi,Ajax'

const fruits = ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Mango', 'Poly', 'Kiwi', 'Ajax']
let result = ''

for(let i= 0; i < fruits.length; i++){
    result += fruits[i] + ','
}
result = result.slice(0, result.length -1) //видалили останню кому
console.log(result)

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
let string = ''
for (let friend of friends) {
    string += friend + ','
}
string = string.slice(0, string.length -1)
console.log(string);

const items = ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Mango', 'Poly', 'Kiwi', 'Ajax', 'Mango', 'Poly', 'Kiwi', 'Ajax']
let resultJoin = items.join(',')
console.log(resultJoin)