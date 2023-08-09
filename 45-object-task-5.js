// Задача 5
// Створіть обʼєкт calculator(калькулятор) з трьома методами:
//1. read(a, b) - запитує два значення та зберігає їх як властивість обʼєкта
//2. sum() - повертає суму збережених значень
//3. mult() - множить збережені значення та повертає результат

const culc = {
    data: {},
    read(a, b){
       this.data.a = a
       this.data.b = b 
    },
    sum(){
       return this.data.a + this.data.b
    },
    mult(){
        return this.data.a * this.data.b
    },
    dev(){
        return this.data.a / this.data.b
    },    
}
culc.read(10, 15)
console.log(culc.sum())
console.log(culc.mult())
console.log(culc.dev())
console.table(culc)

