// Уявімо, що у нас є список студентів та їх оцінок з різних предметів. 
// Нам потрібно обчислити середній бал кожного студента та вивести на екран список студентів і їх середніх оцінок.
// Список студентів та оцінок
const students = [
    { name: 'John', grades: [90, 87, 93, 88] },
    { name: 'Jane', grades: [78, 82, 80, 85] },
    { name: 'Mike', grades: [92, 89, 85, 78] },
    { name: 'Anna', grades: [75, 80, 92, 87] },
]

// for (const student of students) {
//     console.log(student)
//     console.log(student.name)
//     console.log(student.grades)
// }

function cucl(grades) {
    if (grades.length === 0) return 0
    let summ = 0
    for (const grade of grades) {
        summ += grade
    }
    return summ / grades.length
}
function displayStudent(students) {
    for (const student of students) {
        const averag = cucl(student.grades)
        console.log(`${student.name}: ${averag}`)
    }
}
displayStudent(students)

