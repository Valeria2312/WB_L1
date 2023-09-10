//еще один вариант реализации
//JSON поддерживает строки, числа, булевы значения, массивы и объекты.

const dataJSON2 = {
  name: "John Doe",
  last_name: null,
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Any-town",
    country: "USA",
  },
  languages: ["English", "Spanish"],
  contact: {
    email: "john@example.com",
    phone: "555-123-4567",
  },
};

function JSONStringify(data) {
  //определяем массив типов
  const specialTypes = [undefined, null, Number.NaN, Infinity, -Infinity];

  //проверяем содержится ли  один из типов specialTypes в data
  if (specialTypes.includes(data)) {
    return `${data}`;
  }
  //проверяем является ли data number или boolean
  if (typeof data === "number" || typeof data === "boolean" || data === null) {
    //тогда просто возвращаем значение
    return `${data}`;
  }
  //если data является строкой
  if (typeof data === "string") {
    //оборачиваем ее в кавычки
    return `"${data}"`;
  }
  //если data является массивом
  if (Array.isArray(data)) {
    //вызываем рекурсию на каждый элемент массива
    const arrayElements = data.map((item) => JSONStringify(item));
    //возвращаем проверенный массив в квадратных ковычках
    return `[${arrayElements.join(",")}]`;
  }
  //если data является объектом
  if (typeof data === "object" && data !== null) {
    // выявляем все ключи из data
    const objectProperties = Object.keys(data)
      //фильтруем ключи объекта data, исключая те ключи, значения которых являются функциями или символами.
      .filter(
        (key) =>
          typeof data[key] !== "function" && typeof data[key] !== "symbol",
      )
      //на каждый ключ формируем строку с проверкой значения рекурсией
      .map((key) => `"${key}":${JSONStringify(data[key])}`);
    //возвращаем проверенный массив в фигурных ковычках
    return `{${objectProperties.join(",")}}`;
  }
}

console.log(JSON.stringify(dataJSON2) === JSONStringify(dataJSON2)); //true
