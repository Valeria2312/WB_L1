//3.	Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// •	вычисление N-го числа в ряду Фибоначчи
// •	вычисление всех чисел в ряду Фибоначчи до числа N
// •	вычисление N-го просто числа
// •	вычисление всех простых чисел до числа N

//вычисление N-го числа в ряду Фибоначчи
function calculateFibonacciNumber(num) {
  //Возвращаем значение если оно меньше двух. Если число имеет значение 0, 1, то результат функции будет 0 и 1 соответственно.
  if (num < 2) {
    return num;
  }
  //Возвращаем результат
  return calculateFibonacciNumber(num - 1) + calculateFibonacciNumber(num - 2);
}
console.log(calculateFibonacciNumber(1));

//вычисление всех чисел в ряду Фибоначчи до числа N

function generateFibonacciSequence(num) {
  const sequence = [0, 1]; // Начальные числа ряда Фибоначчи

  function calculateNextFibonacci() {
    const nextFibonacci =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextFibonacci <= num) {
      sequence.push(nextFibonacci);
      calculateNextFibonacci(); // Рекурсивно вызываем себя, пока следующее число не превысит N
    }
  }
  calculateNextFibonacci(); // Запускаем первый расчет
  return sequence;
}
console.log(generateFibonacciSequence(10));


//вычисление N-го просто числа

//принимаем входное значение для проверки
function isPrime(number) {
  //проходимся циклом до квадратного корня от входящего числа, если до этого числа ничего не найдено, то после ничего нет
  for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
    //проверяем делится ли число без остатка, если да, то это число не является простым, возвращаем false
    if (number % i === 0) {
      return false;
    }
  }
  //если число которое прошло проверку больше чем один, то оно простое и мы возвращаем true
  return number > 1;
}
console.log(isPrime(7)); //true
console.log((isPrime(3))); //true
console.log(isPrime(4)); //false
console.log(isPrime(10)); //false

//вычисление всех простых чисел до числа N
// Вариант решения 1

//Такой вариант решения будет плохо работать на больших числах, так как здесь мы запускам два цикла, певый в функции getPrimes,
// второй в isPrime. Сложность такого решения O(n^2), так как вызываем цикл в цикле.
function getPrimes(number) {
  //Создаем пустой массив куда будут пушиться все простые число до N
  let primes = [];
  //Циклом проходмися по всем числам до числа N
  for (let i = 2; i <= number; i++) {
    //Проверяем каждое число является ли оно простым, если да, то пушим его в итоговый массив
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  // Возвращаем сформированный массив простых чисел
  return primes;
}
console.log(getPrimes(7));
console.log(getPrimes(30));
console.log(getPrimes(100));

// // Вариант решения 2
// // Для решения задачи используется алгоритм "Решето Эратосфена"
// //Сложность алгоритма  log(log(n), так как мы не проходимся до конца.
// function getPrimesEratosthenes(number) {
//   //Инициализируем пустые массивы
//   const seive = [];
//   const arrPrimeNumbers = [];
//   //Проходимся циклом от 2(первое натуральное число) до N
//   return function () {
//     for (let i = 2; i <= number; i++) {
//       //Каждое число проверяем, если его нет в массиве seive, то оно натуральное
//       if (!seive[i]) {
//         //И пушим его в массив натуральных чисел
//         arrPrimeNumbers.push(i);
//         //вычеркиваем все числа кратные i
//         for (let j = i * 2; j <= number; j += i) {
//           seive[j] = true;
//         }
//       }
//     }
//     // Возвращаем массив натуральных чисел
//     return arrPrimeNumbers;
//   };
// }
// const primes = getPrimesEratosthenes(7);
// console.log(primes());
// const primes2 = getPrimesEratosthenes(30);
// console.log(primes2());
// const primes3 = getPrimesEratosthenes(100);
// console.log(primes3());
