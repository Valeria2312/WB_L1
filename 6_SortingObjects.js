//6.	Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }.
// Напишите код, который сортирует этот массив по возрастанию возраста,
// а при равных возрастах сортирует по алфавиту по полю name.

//Тестовый JSON
const jsonData = [
    { name: 'John', age: 25 },
    { name: 'Anna', age: 10 },
    { name: 'Nik', age: 10 },
    { name: 'Mike', age: 13 },
    { name: 'Fiona', age: 30 }
];

function sortingObject(jsonData) {
    //возвращаем отсортироанный массив jsonData
    return jsonData.sort((x, y) => {
        //сорируем массив объектов
        //Если возраст одинаковый
        if(x.age === y.age) {
            //сравниваем поля name
            return x.name - y.name
        }
        //возвращаем сортиовку по полю age
       return  x.age - y.age;
    });
}


console.log(sortingObject(jsonData))
//[ { name: 'Anna', age: 10 },
//{ name: 'Nik', age: 10 },
// { name: 'Mike', age: 13 },
// { name: 'John', age: 25 },
// { name: 'Fiona', age: 30 }
//]

