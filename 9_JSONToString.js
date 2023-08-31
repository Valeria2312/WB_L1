//9. Реализовать функцию конвертации JSON в строку

const dataJSON = {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "address": {
        "street": "123 Main St",
        "city": "Any-town",
        "country": "USA"
    },
    "languages": ["English", "Spanish"],
    "contact": {
        "email": "john@example.com",
        "phone": "555-123-4567"
    }
}

function JSONStringify(data) {
//создаем функции проверки на типы данных
    const isArray = (value) => {
        //Дополнительные варианты проверки на массив:
        // return value instanceof Array
        // return Array.isArray(value)
        //поверяем является входящее значение массивом
        return  value && value.constructor === Array;
    }
    const isObject = (value) => {
        //Дополнительные варианты проверки на объект:
        // return obj instanceof Object
        //поверяем является входящее значение объектом, не является ли null, не является ли массивом (typeof array === "object")
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }
    const isBoolean = (value) => {
        //поверяем является входящее значение boolean
        return typeof value === 'boolean';
    }
    const isString = (value) => {
        //поверяем является входящее значение string
        return typeof value === 'string';
    }
    const isNumber = (value) => {
        //поверяем является входящее значение number
        return typeof value === 'number';
    };
    const isNotANumber = (value) => {
        //поверяем является входящее значение number
        return typeof value === 'number' && isNaN(value);
    };

    const isInfinity = (value) => {
        //поверяем является входящее значение infinity
        return typeof value === 'number' && !isFinite(value);
    };

    const isNull = (value) => {
        //поверяем является входящее значение null, (typeof null === "object")
        return value === null && typeof value === 'object';
    };
    const isUndefined = (value) => {
        //поверяем является входящее значение undefined
        return value === undefined && typeof value === 'undefined';
    };

    const isFunction = (value) => {
        //поверяем является входящее значение function
        return typeof value === 'function';
    };

    const isSymbol = (value) => {
        //поверяем является входящее значение symbol
        return typeof value === 'symbol';
    };
    //Проверяем, является ли входящее значение или NaN или Infinity или Null
    const nullDataTypes = (value) => {
        return isNotANumber(value) || isInfinity(value) || isNull(value);
    }
    //Проверяем, является ли входящее значение или числом или строкой или boolean
    const checkingForSimpleType = (value) => {
        return isNumber(value) || isString(value) || isBoolean(value);
    };
    //Проверяем, является ли входящее значение одним из типав котрый необходимо игнорировать
    const ignoreDataTypes = (value) => {
        return isUndefined(value) || isFunction(value) || isSymbol(value);
    };
    // Если data соответсвует условию (входящее значение или NaN или Infinity или Null)
    if(nullDataTypes(data)) {
        //возвращаем null
        return `${null}`
    }
    // Если data соответсвует условию (входящее значение или число или строка или boolean)
    if (checkingForSimpleType(data)) {
        //Если data является строкой, то оборачиваем строку в ковычки, если является числом или Boolean не оборачиваем
        const passQuotes = isString(data) ? `"` : '';
        //возвращаем строку
        return `${passQuotes}${data}${passQuotes}`;
    }
    //Удаление последней запятой в строке из объекта или массива
    const removeComma = (str) => {
        //разбиваем строку на массив
        const tempArr = str.split('');
        //удаляем последний элемент массива
        tempArr.pop();
        //склеиваем массив обратно в строку
        return tempArr.join('');
    };

// если объект
    if (isObject(data)) {
        //Объявляем строку куда запишем результат
        let objStr = '';
        //выявляем все ключи из входящего объекта JSON
        const objKeys = Object.keys(data);
        //проходимся по ключам объекта
        objKeys.forEach((eachKey) => {
            //из каждого ключа получаем значение. путем поиска значения по ключу в объекте
            const eachValue = data[eachKey];
            //проверяем явзяется ли значение одним их типов который мы должны игнорировать или нет. Если да, то ничего не  записываем, если нет
            //записываем ключ и значение в строку, рекурсией проверяя что лежит в значении объекта
            objStr += (!ignoreDataTypes(eachValue)) ? `"${eachKey}":${JSONStringify(eachValue)},` : '';
        });
        //записываем полученную строку в фигурные скобки
        return `{` + removeComma(objStr) + `}`;
    }
        // если массив
    if (isArray(data)) {
        //Объявляем строку куда запишем результат
        let arrStr = '';
        //проходимся по каждому элементу массива
        data.forEach((eachValue) => {
            //записываем элемент в строку, рекурсией проверяя чем является элемент
            arrStr += `${JSONStringify(eachValue)},`;
        });
        //записываем полученную строку в квадратные скобки
        return  `[` + removeComma(arrStr) + `]`;
    }
}

// console.log( JSON.stringify(dataJSON) === JSONStringify(dataJSON)) //true
