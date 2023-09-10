//Вывод результатов работы функции в консоль
console.log(palindrome2("шабаш")); //true
console.log(palindrome2("радар")) //true
console.log(palindrome2("saippuakivikauppias")) //true
console.log(palindrome2("Лёша на полке клопа нашёл"))//true
console.log(palindrome2("Аргентина манит негра"))//true
console.log(palindrome2("Учуя молоко, я около мяучу"))//true
console.log(palindrome2("Муха! О, муха! Велика аки лев! Ах, ум! О ах, ум!"))//true
console.log(palindrome2("рефрижератор")) //false
console.log(palindrome2("Скажи-ка, дядя, ведь не даром Москва, спаленная пожаром, Французу отдана?"))//false

function palindrome2(str) {
  //Переводим полученую в функцию строку в нижний регистр, удаляем из нее пробелы, знаки препинания.
  str = str.toLowerCase().replace(/[\s!?,]/g, "");
  //находим последний индекс
  const lastIndex = str.length - 1;
  //проходим циклом половину строки, т.к. строка должна быть симметричной
  for (let i = 0; i < str.length / 2; i++) {
    //сравниваем символы c начала и конца
    if (str[i] !== str[lastIndex - i]) {
      //если не совпало возвращаем false
      return false;
    }
  }
  //если совпало возвращаем true
  return true;
}
