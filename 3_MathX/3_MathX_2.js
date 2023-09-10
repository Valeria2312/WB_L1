//вычисление всех простых чисел до числа N
// Вариант решения 2
// Для решения задачи используется алгоритм "Решето Эратосфена"
//Сложность алгоритма  log(log(n), так как мы не проходимся до конца.
function getPrimesEratosthenes(number) {
    //Инициализируем пустые массивы
    const seive = [];
    const arrPrimeNumbers = [];
    //Проходимся циклом от 2(первое натуральное число) до N
    return function () {
        for (let i = 2; i <= number; i++) {
            //Каждое число проверяем, если его нет в массиве seive, то оно натуральное
            if (!seive[i]) {
                //И пушим его в массив натуральных чисел
                arrPrimeNumbers.push(i);
                //вычеркиваем все числа кратные i
                for (let j = i * 2; j <= number; j += i) {
                    seive[j] = true;
                }
            }
        }
        // Возвращаем массив натуральных чисел
        return arrPrimeNumbers;
    };
}
const primes = getPrimesEratosthenes(7);
console.log(primes());
const primes2 = getPrimesEratosthenes(30);
console.log(primes2());
const primes3 = getPrimesEratosthenes(100);
console.log(primes3());
