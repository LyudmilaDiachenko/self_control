
// Є три масиви з рівнем продажів менеджерів. Знайти найменше значення.  

const array1 = [24000, 50000, 15000]
const array2 = [35000, 105000, 12600]
const array3 = [1200, 56500, 6250]

const arrays = array1.concat(array2, array3);
let min = arrays[0]

for (let array of arrays) {
    if (array < min) {
        min = array
    }
}
console.log("Найменший рівень продажу", min)