//4.	Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
// 	Функцию надо упаковать в модуль.

//Принимает на вход число и массив
export default function getWord(number, cases) {
  // Проверка, если число при делении оканчивается на 1 и не оканчивается на 11 (1 книга, 21 книга)
  if (number % 10 === 1 && number % 100 !== 11) {
    // Возвращаем слово из массива
    return cases[0];
  }
  // Проверка, если число при делении оканчивается на 2, 3 или 4 и не оканчивается на 12, 13 или 14 (2 книги, 23 книги)
  if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
    return cases[1];// Возвращаем слово из массива
  } else {
    // Возвращаем слово из массива
    return cases[2];
  }
}
