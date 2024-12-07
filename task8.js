// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while

// Приклади використання:
// console.log(removeCharacter("Hello, world!", "o")); // "Hell, wrld!"
// console.log(removeCharacter("JavaScript", "a")); // "JvScript"
// console.log(removeCharacter("12345", "3")); // "1245"

function removeCharacter(str, char) {
  let newString = "";
  let count = 0;
  while (count < str.length) {
    if (char === str[count]) {
      count++;
      continue;
    } else {
      newString += str[count];
      count++;
    }
  }
  return newString;
}

let a = 0;
let b = 0;

console.log("a", a++);
console.log("b", (b += 1));

console.log("a після", ++a);
