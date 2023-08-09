
// Напиши функцію slugify(string) яка отримує рядок та повертає URL-slug
// Рядок складається лише з букв та пробілів

function slugify(string) {
    // const normolazeString = string.toLowerCase();
    // const worlds = normolazeString.split(" ")
    // const slug = worlds.join("-")
    // return slug

    return string.toLowerCase().split(" ").join("-") //скорочений запис
}

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));