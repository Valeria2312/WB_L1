//4.	Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
// 	Функцию надо упаковать в модуль.

//Принимает на вход число и массив
export default function getWord(number, cases) {
    if(number % 10 === 1 && number % 100 !== 11) {
        return cases[0]
    }
    if([2,3,4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
        return cases[1]
    }
    else {
        return cases[2]
    }

}
