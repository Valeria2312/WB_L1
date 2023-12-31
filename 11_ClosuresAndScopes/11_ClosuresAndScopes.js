//11.	Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию.
// Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции, даже после того,
// как внешняя функция завершила свое выполнение.

function firstFunction() {
  //Создаем переменную в внешней функции
  const variable = "Переменная внешней функции";
  //возвращаем внутреннюю функцию
  return function secondFunction() {
    //возвращаем результат работы второй функции
    return variable + " + работа внутренней функции";
  };
}
//сохраняем доступ к внутренней переменной
const innerFunc = firstFunction();
console.log(innerFunc());
