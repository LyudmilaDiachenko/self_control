// Напишіть програму, яка дозволить користувачу 
// створити список контактів. Кожен контакт містить ім'я, 
// прізвище, номер телефону та електронну адресу. 
// Користувач повинен мати можливість додавати нові контакти, 
// видаляти існуючі, а також переглядати всі контакти в списку.

let contactList = {
    contacts: [],
    addContact(newContact){
        this.contacts.push(newContact)
    },
    deleteContact(firstName){
        for(let i in this.contacts){
            if(this.contacts[i].firstName === firstName){
                delete this.contacts[i];
            }
        }
    },
    list(){
        return this.contacts
    }

}
contactList.addContact({
    firstName: "Lyudmyla",
    secondName: "Diachenko",
    phoneNumber: "+38063-234-23-45",
    email: "lyudmyla@ukr.net",

})
contactList.addContact({
    firstName: "Sofiia",
    secondName: "Diachenko",
    phoneNumber: "+38063-234-43-46",
    email: "sofiia@ukr.net",
})
console.table(contactList.list())
contactList.deleteContact('Sofiia')
console.table(contactList.list())
