// Напишіть програму, яка зберігає дані про книги 
// в об'єктах та дозволяє користувачеві додавати 
// нові книги, видаляти і редагувати існуючі книги, 
// а також виводити список всіх книг.

let books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949,
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      year: 1932,
    },
  ];

let bookcase = {
    books: [],
    add(book){
        this.books.push(book);
    },
    delete(title){
        for(let i in this.books){
            if(this.books[i].title === title){
                delete this.books[i];
            }
        }
    },
    edit(title, newBook){
        for(let i in this.books){
            if(this.books[i].title === title){
                this.books[i] = newBook
            }
        }
    },
    list(){
        return this.books
    },
}

for(let book of books){
    bookcase.add(book)
}
console.table(bookcase.list())
bookcase.delete('1984')
console.table(bookcase.list())
bookcase.edit('Brave New World', {title: 'Досконалий код', author: 'Макконнелл Стів', year: 2010})
console.table(bookcase.list())