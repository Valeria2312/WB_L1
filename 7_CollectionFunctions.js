//7.	Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другими словами, нужно выполнить следующие шаги:
// a.	Вызвать первую функцию из массива.
// b.	После завершения работы первой функции вызвать вторую функцию.
// c.	После завершения работы второй функции вызвать третью функцию.
// d.	И так далее, пока все функции в массиве не будут вызваны по порядку.

// //Решение 1
// //объявляем функции
// function functionFirst(num) {
//     return num + 10
// }
// function functionSecond(num) {
//     return num * 7
// }
// function functionThird(num) {
//     return num * 3
// }
// //Собираем функции в массив
// const functionArray = [functionFirst, functionSecond, functionThird];
// // Пример данных
// const inputNumber = 5;
// // Применяем функции последовательно. Передаем в метод reduce очередную функцию и при первом вызове inputNumber,
// // в функцию передаем аккумулятор (результат предыдущего вызова этой функции).
// const finalResult = functionArray.reduce((acc, func) => func(acc), inputNumber);
// console.log(`Final result: ${finalResult}`)


//Решение 2
//Объявляем функции
const firstPromise = () =>
    // Создаётся объект promise
    // А когда они завершатся — нужно вызвать
    // resolve(результат) при успешном выполнении
    // переведёт промис в состояние fulfilled с результатом в resolve
    new Promise((resolve) => setTimeout(() => resolve(300)), 300);

const secondPromise = param =>
    new Promise((resolve) => setTimeout(() => resolve(param + 200)), 200);

const thirdPromise = param =>
    new Promise((resolve) => setTimeout(() => resolve(param + 100)), 100);


//передаем в функцию обработки массив функций
async function promisesInSeries(asyncFns) {
    //объявляем переменную, где будет храниться параметр передаваемый в очередную функцию
    let param;
//проходимся по всем функциям в массиве
    for(let i = 0; i < asyncFns.length; i++) {
//записваем в param рзультат выполнения функции с параметром
        param = await asyncFns[i](param)
    }
// результат выполнения самой последней функции
    return param;
}
const functionArray = [firstPromise, secondPromise, thirdPromise];
// console.log(await promisesInSeries(functionArray));
