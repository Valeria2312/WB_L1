//7.	Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другими словами, нужно выполнить следующие шаги:
// a.	Вызвать первую функцию из массива.
// b.	После завершения работы первой функции вызвать вторую функцию.
// c.	После завершения работы второй функции вызвать третью функцию.
// d.	И так далее, пока все функции в массиве не будут вызваны по порядку.

//Решение 1
//объявляем функции
function functionFirst(num) {
    return num + 10
}
function functionSecond(num) {
    return num * 7
}
function functionThird(num) {
    return num * 3
}
//Собираем функции в массив
const functionArray = [functionFirst, functionSecond, functionThird];
// Пример данных
const inputNumber = 5;
// Применяем функции последовательно. Передаем в метод reduce очередную функцию и при первом вызове inputNumber,
// в функцию передаем аккумулятор (результат предыдущего вызова этой функции).
const finalResult = functionArray.reduce((acc, func) => func(acc), inputNumber);
console.log(`Результат: ${finalResult}`)


