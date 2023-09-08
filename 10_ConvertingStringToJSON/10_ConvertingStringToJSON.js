//10.	Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.
//Убираем все пробелы из входной строки input с помощью .replace(/\s/g, ''), чтобы облегчить обработку.
//
// Объявляем переменную index, которая будет использоваться для отслеживания текущей позиции в строке jsonString.
//
// Создаем внутреннюю функцию parseValue, которая будет парсить значения. Эта функция определяет, с чем начинается значение, и вызывает соответствующие функции для парсинга: parseObject, parseArray, parseString, parseNumber, или проверяет на булево значение true/false и null.
//
// Создаем внутреннюю функцию parseString, которая парсит строку. Мы начинаем считывать символы после открывающей кавычки " до закрывающей кавычки ".
//
// Создаем внутреннюю функцию parseNumber, которая парсит числа. Мы начинаем считывать символы, которые могут входить в числа (цифры, знаки минуса/плюса, точка, e или E для экспоненциальной формы).
//
// Создаем внутреннюю функцию parseArray, которая парсит массивы. Мы начинаем считывать элементы массива до закрывающей квадратной скобки ], вызывая parseValue для каждого элемента и обрабатывая запятые.
//
// Создаем внутреннюю функцию parseObject, которая парсит объекты. Мы начинаем считывать пары ключ-значение до закрывающей фигурной скобки }, вызывая parseString для ключа и parseValue для значения, и также обрабатываем запятые.
//
// Возвращаем результат выполнения parseValue() как результат работы функции customJSONParse.
//
// При использовании customJSONParse, передаем в нее строку с JSON-подобными данными. Функция начинает обработку данных с корневого значения, и вызывает подфункции для парсинга вложенных объектов и массивов.
//
// В результате, функция возвращает JavaScript-объект, который соответствует переданной строке JSON.
//
// Обратите внимание, что данная реализация имеет ограничения и может не обрабатывать все возможные сценарии JSON, такие как функции, сложные прототипы, и другие нестандартные типы данных.

function customJSONParse(input) {
    // Удаление пробелов из входной строки
    const jsonString = input.replace(/\s/g, '');

    // Объявляем переменную index, которая будет использоваться для отслеживания текущей позиции в строке
    let index = 0;

    // Функция для парсинга значений
    function parseValue() {
        const currentIndex = jsonString[index]

        if (currentIndex === '{') {
            return parseObject(); // Если значение начинается с "{", это объект
        } if (currentIndex === '[') {
            return parseArray(); // Если значение начинается с "[", это массив
        } if (currentIndex === '"') {
            return parseString(); // Если значение начинается с кавычек, это строка
        } if (jsonString.slice(index, index + 4) === 'true') {
            index += 4;
            return true; // Если значение "true", это булево true
        } if (jsonString.slice(index, index + 5) === 'false') {
            index += 5;
            return false; // Если значение "false", это булево false
        } if (jsonString.slice(index, index + 4) === 'null') {
            index += 4;
            return null; // Если значение "null", это null
        } if(currentIndex.match(/^\d+$/)) {
            return parseNumber(); // В остальных случаях это число
        } else {
            throw new Error("Невалидный формат")
        }
    }

    // Функция для парсинга строки
    function parseString() {
        index++; // Пропускаем открывающую кавычку
        const start = index;
        while (index < jsonString.length && jsonString[index] !== '"') {
            index++;
        }
        const value = jsonString.slice(start, index);
        index++; // Пропускаем закрывающую кавычку
        return value;
    }

    // Функция для парсинга числа
    function parseNumber() {
        const start = index;
        //проходим значения пока они числа
        while (index < jsonString.length && /[-+0-9.eE]/.test(jsonString[index])) {
            index++;
        }
        //добавляем чило в value
        const value = jsonString.slice(start, index);
        //возвращаем value числом
        return parseFloat(value);
    }

    // Функция для парсинга массива
    function parseArray() {
        //Объявляем массив для сохранения результата
        const result = [];
        index++; // Пропускаем открывающую квадратную скобку
        //записываем массив пока нет закрывающей скобки
        while (index < jsonString.length && jsonString[index] !== ']') {
            result.push(parseValue());
            if (jsonString[index] === ',') {
                index++; // Пропускаем запятую
            }
        }
        index++; // Пропускаем закрывающую квадратную скобку
        return result;
    }

    // Функция для парсинга объекта
    function parseObject() {
        //Объявляем объект для сохранения результата
        const result = {};
        index++; // Пропускаем открывающую фигурную скобку
        //записываем объект пока нет закрывающей скобки
        while (index < jsonString.length && jsonString[index] !== '}') {
            const key = parseString();
            index++; // Пропускаем двоеточие
            result[key] = parseValue();
            // если в значении запятая
            if (jsonString[index] === ',') {
                index++; // Пропускаем запятую
            }
        }
        index++; // Пропускаем закрывающую фигурную скобку
        //проверяем значения свойств на тип и содержание
        function containsFunction(value) {
            return typeof value === "string" && value.includes("function");
        }
        // Проверяем все значения в объекте на наличие подстроки "function"
        for (const key in result) {
            if (result.hasOwnProperty(key) && containsFunction(result[key])) {
                delete result[key]
            }
        }
        return result;
    }
    return parseValue();
}

const jsonString = '{"array": ["foo", "bar"], "key": "value", "age": 20, "name": null, "nested": {"foo": "bar"}, "function": "function(){return 42}"}';

try {
    const parsedData = customJSONParse(jsonString);
    console.log(parsedData);
    // const parsedData2 = customJSONParse(jsonString2);
    // console.log(parsedData2);
    // const parsedData3 = customJSONParse(jsonString3);
    // console.log(parsedData3);
} catch (error) {
    console.error(error.message);
}
