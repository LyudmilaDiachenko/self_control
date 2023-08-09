// Завдання 5
// Напиши скрипт управління особистим кабінетом інтернет 
// банка. Ми маємо обʼєкт account в якому необхідно
// реалізувати методи для роботи з балансом та історією 
// транзакцій.
// Типів транзакцій всього дві.
// Можна покласти кошти на рахунок або зняти з рахунку.

// const transactionType = {
//     deposit: 'deposit',
//     withdraw: 'withdraw'
// }

// const account = (function(){
//     let balance = 0;
//     let transactions = []

//     return {
//         doTransaction(type, amount){
//             if (type === transactionType.deposit){
//                 balance += amount
//             } else {
//                 balance -= amount
//             }
//             transactions.push({type: type, amount: amount})
//         },
//         getBalance(){ return balance },
//         getTransactions(){ return transactions },
//     }


// })()

// account.doTransaction(transactionType.deposit, 20)
// account.doTransaction(transactionType.deposit, 5000)
// account.doTransaction(transactionType.deposit, 15000)
// account.doTransaction(transactionType.withdraw, 50000)

// console.table(account.getTransactions())
// console.log(`Balance: ${account.getBalance()}`)


const transactionType = {
    deposit: 'deposit',
    withdraw: 'withdraw'
}

let account = {
    balance: 0,
    transactions: [],
    doTransaction(type, amount){
        if (type === transactionType.deposit){
            this.balance += amount
        } else {
            this.balance -= amount
        }
        this.transactions.push({type: type, amount: amount})
    },
    getBalance(){ return this.balance },
    getTransactions(){ return this.transactions },
}

account.doTransaction(transactionType.deposit, 20)
account.doTransaction(transactionType.deposit, 5000)
account.doTransaction(transactionType.deposit, 15000)
account.doTransaction(transactionType.withdraw, 50000)

console.table(account.getTransactions())
console.log(`Balance: ${account.getBalance()}`)

