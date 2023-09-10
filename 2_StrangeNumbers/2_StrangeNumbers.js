//2.	Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным,
// и false в противном случае. Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

console.log(getStrangeNumbers(70));
console.log(getStrangeNumbers(836));
console.log(getStrangeNumbers(4030));
console.log(getStrangeNumbers(5830));
console.log(getStrangeNumbers(7192));
console.log(getStrangeNumbers(7912));
console.log(getStrangeNumbers(9272));
console.log(getStrangeNumbers(10430));
console.log(getStrangeNumbers(877)); //false

function getStrangeNumbers(number) {
  // Определяем половину числа, до которой будем искать делители
  let half = parseInt(number / 2) - 1;
  // Инициализируем переменные
  let sum = 1; // Исходная сумма, начинающаяся с 1
  let evenNumber = -1; // Переменная для хранения вычисленного четного числа
  let addedNumbers = new Set(); // Множество для отслеживания уже обработанных делителей
  // Перебираем возможные делители от 2 (sum+1) до половины числа
  for (let divider = sum + 1; divider < half; divider++) {
    // Вычисляем четное число, на которое делится входящее число
    evenNumber = parseInt(number / divider);
    // Проверяем, что текущий делитель и вычисленное четное число не были обработаны ранее
    // и что результат деления числа на делитель действительно равен вычисленному четному числу
    if (!addedNumbers.has(divider) && number / divider === evenNumber) {
      // Увеличиваем сумму на значение делителя и вычисленного четного числа
      sum += divider + evenNumber;
    }
  }
  // Возвращаем результат, является ли сумма делителей больше входящего числа
  return sum > number;
}
