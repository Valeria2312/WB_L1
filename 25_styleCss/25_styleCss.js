//25.	Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент,
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.
//Находим элемент куда вставим созданный
const main = document.querySelector("body")
function createNewElement() {
    //создаем новый элемент с заданным тегом
    const div = document.createElement('div');
    //добавляем класс
    div.className = "createNewElement";
    //Добавляем стили
    div.style.background = "red"
    div.style.width = "100px";
    div.style.height = "100px";
    //добавляем контент
    div.textContent = "Я создан с помощью JS";
    //Вставляем элемент в родительский
    main.append(div);
}
createNewElement()
