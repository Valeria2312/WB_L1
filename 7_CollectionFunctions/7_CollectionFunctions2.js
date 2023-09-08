//Решение 2
//Объявляем функции
const firstPromise = () =>
  // Создаётся объект promise
  // А когда они завершатся — нужно вызвать
  // resolve(результат) при успешном выполнении
  // переведёт промис в состояние fulfilled с результатом в resolve
  new Promise((resolve) => setTimeout(() => resolve(300)), 300);

const secondPromise = (param) =>
  new Promise((resolve) => setTimeout(() => resolve(param + 200)), 200);

const thirdPromise = (param) =>
  new Promise((resolve) => setTimeout(() => resolve(param + 100)), 100);

//передаем в функцию обработки массив функций
async function promisesInSeries(asyncFns) {
  //объявляем переменную, где будет храниться параметр передаваемый в очередную функцию
  let param;
  //проходимся по всем функциям в массиве
  for (let i = 0; i < asyncFns.length; i++) {
    //записваем в param рзультат выполнения функции с параметром
    param = await asyncFns[i](param);
  }
  // результат выполнения самой последней функции
  return param;
}
const functionArray = [firstPromise, secondPromise, thirdPromise];
console.log(await promisesInSeries(functionArray));
