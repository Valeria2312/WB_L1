// Задача 1. Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом.
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).

//Вывод результатов работы функции в консоль
console.log(palindrome("шабаш")); //true
// console.log(palindrome("радар")) //true
// console.log(palindrome("saippuakivikauppias")) //true
// console.log(palindrome("Лёша на полке клопа нашёл"))//true
// console.log(palindrome("Аргентина манит негра"))//true
// console.log(palindrome("Учуя молоко, я около мяучу"))//true
// console.log(palindrome("Муха! О, муха! Велика аки лев! Ах, ум! О ах, ум!"))//true
// console.log(palindrome("рефрижератор")) //false
// console.log(palindrome("Скажи-ка, дядя, ведь не даром Москва, спаленная пожаром, Французу отдана?"))//false

function palindrome(str) {
  //Переводим полученую в функцию строку в нижний регистр, удаляем из нее пробелы, знаки препинания.
  str = str.toLocaleLowerCase().replace(/[\s!?,]/g, "");
  //Разделяем строку на массив с подстроками(буквами), разворачиваем массив, склеиваем массмв обратно в строку.
  return str === str.split("").reverse().join("");
  //возвращаем Boolean результат. True если строки одинаковы. False если строки разные
}
