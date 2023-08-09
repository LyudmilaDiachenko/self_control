// Створіть програму, яка виводить список студентів 
// та їх оцінок з різних предметів.
// Для цього створіть об'єкти для кожного студента, 
// які містять інформацію про його ім'я та список оцінок з предметів.

const student1 = {
    name: 'Артем',
    grades: {
      математика: 95,
      англійська: 85,
      історія: 90,
    },
  };
  
  const student2 = {
    name: 'Олександр',
    grades: {
      математика: 80,
      англійська: 90,
      історія: 75,
    },
  };
  
  const student3 = {
    name: 'Діана',
    grades: {
      математика: 100,
      англійська: 85,
      історія: 70,
    },
  };

const students = [student1, student2, student3]

let grades = {}
for (let student of students) {
    grades[student.name] = student.grades

}
console.table(grades)
