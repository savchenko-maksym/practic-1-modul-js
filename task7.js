//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

let number = prompt("Введіть число більше 100");
while (number < 100 && number !== null) {
  number = prompt("Введіть число більше 100 ще раз");
}
console.log(number);
