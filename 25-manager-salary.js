// Маємо два масиви. В першому прізвища менеджерів, в другому суми їх продажів 
// Виведи в консоль менеджерів та їх продажі

// const managers = ['Petro', 'Viktor', 'Anna', 'Olga'];
// const sales = [20000, 34000, 17000, 23000];

// for(i = 0; i < managers.length; i++) {
//     console.log(`${managers[i]} - ${sales[i]}`)
// }

const managers = ['Petro', 'Viktor', 'Anna', 'Olga'];
const sales = [20000, 34000, 17000, 23000];

for(let manager_index = 0; manager_index < managers.length; manager_index++) {
    for(let sale_index = 0; sale_index < sales.length; sale_index++) {
        if (manager_index == sale_index){
            console.log(`${managers[manager_index]} - ${sales[sale_index]}`)
        }        
    }
}