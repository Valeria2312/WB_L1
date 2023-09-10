console.log(isWeird(70));
console.log(isWeird(836));
console.log(isWeird(4030));
console.log(isWeird(5830));
console.log(isWeird(7192));
console.log(isWeird(7912));
console.log(isWeird(9272));
console.log(isWeird(10430));
console.log(isWeird(877)); //false

function isWeird(number) {
    // Вычисляем сумму делителей числа
    function getDivisorsSum(n) {
        let sum = 1; // Исключаем само число из суммы делителей
        for (let i = 2; i * i <= n; i++) {
            //Перебираем возможные делители от 2 до квадратного корня числа
            if (n % i === 0) {
                // Если i является делителем числа n
                sum += i; // Добавляем делитель i к сумме
                if (i !== n / i) {
                    // Проверяем, чтобы не добавить одинаковые делители (если i не равно n / i)
                    sum += n / i; // Добавляем парный делитель к сумме
                }
            }
        }
        return sum; // Возвращаем сумму делителей
    }
    // Вычисляем сумму делителей и проверяем условие странности
    const divisorsSum = getDivisorsSum(number);
    //вернет true если условие верно и false если не верно
    return divisorsSum > number;
}
