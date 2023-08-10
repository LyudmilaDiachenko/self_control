// Створити об'єкт "Студент" з методами для додавання та 
// видалення предметів, які він вивчає.

let student = {
    subjects: [],
    add(subject){
        this.subjects[subject] = subject;
    },
    delete(subject){
        delete this.subjects[subject]
    }
}

student.add('Boolean Mathematical')
student.add('History')
console.log(student.subjects)
student.delete('History')
console.log(student.subjects)