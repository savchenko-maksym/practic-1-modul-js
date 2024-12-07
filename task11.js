// Написати функцію extractNumber,
// яка приймає рядок str і повертає перше число,
// знайдене в рядку.Якщо число не знайдено,
// функція повинна повертати null.

// Приклади використання:
console.log(extractNumber("abc123def")); // 123
console.log(extractNumber("no numbers here")); // null
console.log(extractNumber("42 is the answer")); // 42

function extractNumber(str) {
  let number = "";
  for (let i = 0; i < str.length; i += 1) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      number += str[i];
    }
  }
  return number.length > 0 ? +number : null;
}
