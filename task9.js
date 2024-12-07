//Дано рядок, який складається із символів.Напишіть функію
// яка перевіряє, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

const string = "abcde"; // тестовий рядок 1
const stringSecond = "bcde"; // тестовий рядок 2

function checkString(str) {
  return str.startsWith("a") ? "так" : "ні";
}

console.log(checkString(string));
console.log(checkString(stringSecond));
