// Задача 1
// Напишіть код для додавання всіх зарплат та збережіть результат і зміннну sum.
// У нас є обʼєкт, в якому зберігаються зарплати нашої команди.
// Повино вийти 390. Якщо обʼєкт salaries пустий, то результат має бути 0

const salaries = { 
    data: { 
      John: 100, 
      Ann: 160, 
      Pete: 130, 
    }, 
    changeSalary() { 
      for (const user in this.data) { 
        this.data[user] = 0; 
      } 
    }, 
    addUser(newUser, userSalary) { 
      this.data[newUser] = userSalary; 
    }, 
  }; 
   
  salaries.changeSalary(); 
   
  function sumSalaries(salaryValue) { 
    console.log(salaryValue); 
    let sum = 0; 
    for (const salary of salaryValue) { 
      sum += salary; 
    } 
    return console.log(sum); 
  } 
  salaries.addUser('Gregory', 500); 
  console.log(salaries.data); 
   
  sumSalaries(Object.values(salaries.data));