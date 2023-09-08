//8.	Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию,
// которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

//Решение 1

//объявляем функции
function functionFirst(inputNumber) {
  return inputNumber + 10;
}
function functionSecond(inputNumber) {
  return inputNumber * 7;
}
function functionThird(inputNumber) {
  return inputNumber * 3;
}
//Собираем функции в массив
const functionArray = [functionFirst, functionSecond, functionThird];
//входное значение которым будут оперировать функции
const inputNumber = 5;

//Вариант если необходимо получать массив результатов текущей функции и предыдущих
function getResultsExecutingFunctions(functionArray) {
  //Возвращаем функцию которая принимает входное значение
  return function (inputNumber) {
    //объявляем пустой массив, в которой запишется результат выполнения функции
    let result = [];
    //Пишем обработку каждой функции из массива
    functionArray.forEach((func) => {
      //записываем результат выполнения функции
      result.push(func(inputNumber));
    });
    //возвращаем результат выполнения функции
    return result;
  };
}

// Создаем новую функцию
const processFunctions = getResultsExecutingFunctions(functionArray);
// Вызываем новую функцию с входными данными
const results = processFunctions(inputNumber);
console.log(results);
// Массив результатов, полученных после вызова каждой функции
//[ 15, 35, 15 ]
